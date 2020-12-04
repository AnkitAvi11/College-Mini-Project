import React, {Component} from 'react';
import { firebase } from "../firebase/firebase";
import { Chart } from "chart.js";

class Dashboard extends Component {

    constructor (props) {
        super(props)
        this.state = {
            user : null
        }
    }

    componentDidMount () {
        
        this.setState({
            user : firebase.auth().currentUser
        })
        
        this.gettransactions();
        this.getincomes();
    }

    gettransactions = () => {
        let user_name = firebase.auth().currentUser.email;
        fetch("http://localhost:8080/expense/week/"+user_name)
        .then(res => res.json())
        .then(async data => {
            console.log(data)
            let label = [], amountset = new Object(), oset = []
    
            let timeperiod = await (await fetch('http://localhost:8080/startend')).json()
    
            console.log(timeperiod)
    
            let from_day = new Date(timeperiod[0]).getDay()
            let to_day = new Date(timeperiod[1]).getDay()
    
            for(let i=1;i<=7;i++){
                if(from_day==7)
                    from_day = 0
                label.push(createDay(from_day++))
            }
    
            console.log(from_day)
    
            data.forEach(el => {
                let day = new Date(el.publicationDate).getDay();
                console.log(day)
                if(amountset.hasOwnProperty(createDay(day))){
                    amountset[createDay(day)] += parseFloat(el.amount)
                }else{
                    amountset[createDay(day)] = el.amount
                }
            })
    
            console.log(amountset)
    
            for(let i=1;i<=7;i++){
                if (from_day==7) from_day=0
                if(amountset.hasOwnProperty(createDay(from_day))) {
                    oset.push(amountset[createDay(from_day)])
                }else{
                    oset.push(0)
                }
                from_day++;
            }
    
            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: label.reverse(),
                    datasets: [{
                        label: 'Money Spent this week',
                        data: oset.reverse(),
                        backgroundColor: [
                            'transparent',
                            
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
    
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
    
            var ctx = document.getElementById('myChart2').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: label,
                    datasets: [{
                        label: 'Money Spent this week',
                        data: oset,
                        backgroundColor: [
                            'rgba(255, 99, 132)',
                            'rgba(54, 162, 235)',
                            'rgba(255, 206, 86)',
                            'rgba(75, 192, 192)',
                            'rgba(153, 102, 255)',
                            'rgba(255, 159, 64)',
                            'rgba(245, 109, 44)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(215, 119, 34, 0.2)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
    
        })
        .catch(err => console.log(err))
    }

    getincomes = () => {
        let user_name = firebase.auth().currentUser.email;
        fetch("http://localhost:8080/income/week/"+user_name)
        .then(res => res.json())
        .then(async data => {
            console.log(data)
            let label = [], amountset = new Object(), oset = []
    
            let timeperiod = await (await fetch('http://localhost:8080/startend')).json()
    
            console.log(timeperiod)
    
            let from_day = new Date(timeperiod[0]).getDay()
            let to_day = new Date(timeperiod[1]).getDay()
    
            for(let i=1;i<=7;i++){
                if(from_day==7)
                    from_day = 0
                label.push(createDay(from_day++))
            }
    
            console.log(from_day)
    
            data.forEach(el => {
                let day = new Date(el.publicationDate).getDay();
                console.log(day)
                if(amountset.hasOwnProperty(createDay(day))){
                    amountset[createDay(day)] += parseFloat(el.amount)
                }else{
                    amountset[createDay(day)] = el.amount
                }
            })
    
            console.log(amountset)
    
            for(let i=1;i<=7;i++){
                if (from_day==7) from_day=0
                if(amountset.hasOwnProperty(createDay(from_day))) {
                    oset.push(amountset[createDay(from_day)])
                }else{
                    oset.push(0)
                }
                from_day++;
            }
    
            var ctx = document.getElementById('myChart3').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: label.reverse(),
                    datasets: [{
                        label: 'Money Spent this week',
                        data: oset.reverse(),
                        backgroundColor: [
                            'transparent',
                            
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
    
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
    
            var ctx = document.getElementById('myChart4').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: label,
                    datasets: [{
                        label: 'Money Spent this week',
                        data: oset,
                        backgroundColor: [
                            'rgba(255, 99, 132)',
                            'rgba(54, 162, 235)',
                            'rgba(255, 206, 86)',
                            'rgba(75, 192, 192)',
                            'rgba(153, 102, 255)',
                            'rgba(255, 159, 64)',
                            'rgba(245, 109, 44)'
                        ].reverse(),
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(215, 119, 34, 0.2)'
                        ].reverse(),
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
    
        })
        .catch(err => console.log(err))
    }

    render () {
        if(this.state.user === null) {
            return (
                <div className="container">
                    <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <img src={this.state.user.photoURL} alt="" style={{width : "100%"}} />
                            
                            <div className="card-body">
                                <h4 className="card-text"><b>{this.state.user.displayName}</b></h4>
                                <p className="card-text"><small>{this.state.user.email}</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <h5><b>Dashboard</b></h5>
                        <canvas id="myChart" width="100%"></canvas>
                        <canvas id="myChart2" width="100%"></canvas>
                        <canvas id="myChart3" width="100%"></canvas>
                        <canvas id="myChart4" width="100%"></canvas>
                    </div>
                </div>
            </div>
        )
    }
}


function createDay (day) {

    switch(day) {
        case 0 : return "Sunday";
        case 1 : return "Monday";
        case 2 : return "Tuesday";
        case 3 : return "Wednesday";
        case 4 : return "Thursday";
        case 5 : return "Friday";
        case 6 : return "Saturday";
    }

}




export default Dashboard;