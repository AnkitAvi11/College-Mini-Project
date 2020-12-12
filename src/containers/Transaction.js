import React, {Component} from 'react';
import Loader from '../components/Loader';
import { firebase } from "../firebase/firebase";
import { Doughnut } from 'react-chartjs-2';
import {motion} from 'framer-motion';

function getMonthDay(month) {
    switch(month) {
        case 1 : return 31;
        case 2 : return 28;
        case 3 : return 31;
        case 4 : return 30;
        case 5 : return 31;
        case 6 : return 30;
        case 7 : return 31;
        case 8 : return 31;
        case 9 : return 30;
        case 10 : return 31;
        case 11 : return 30;
        case 12 : return 31;
        default : return null;
    }
} 


class Transaction extends Component {

    constructor(props) { 
        super(props);
        this.state = {
            income : [],
            expenses : [],
            display : "hidden",
            selectedExpense : null,
            selectedIncome : null
        }
    }

    componentDidMount () {
        let user_email = firebase.auth().currentUser.email;
        fetch("http://localhost:8080/income/"+user_email)
        .then(res => res.json())
        .then(async data => {
            let expenses = await (await fetch("http://localhost:8080/expense/"+user_email)).json()
            this.setState({
                income : data,
                expenses : expenses
            })
        }).catch(err => {
            console.log(err)
        })
    }

    blockExpenseDisplay = (id) => {
        this.setState({
            display : "block",
            selectedExpense : this.state.expenses[id]
        })
    }

    blockIncomeDisplay = (id) => {
        this.setState({
            display : "block",
            selectedIncome : this.state.income[id]
        })
    }

    hideDisplay = () => {
        this.setState({
            display : "none",
            selectedExpense : null,
            selectedIncome : null
        })
    }


    deleteIncome = (t_id) => {
        let user_email = firebase.auth().currentUser.email;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"username":"priya","title":"Second transaction","amount":20});

        var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/income/delete/"+t_id, requestOptions)
        .then(response => response.text())
        .then(result => {
            let user_email = firebase.auth().currentUser.email;
            fetch("http://localhost:8080/income/"+user_email)
            .then(res => res.json())
            .then(async data => {
                let expenses = await (await fetch("http://localhost:8080/expense/"+user_email)).json()
                this.setState({
                    income : data,
                    expenses : expenses,
                    display : "none",
                    selectedIncome : null
                })
            }).catch(err => {
                console.log(err)
            })
        })
        .catch(error => console.log('error', error));
    }

    deleteExpense = (t_id) => {
        let user_email = firebase.auth().currentUser.email;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"username":"priya","title":"Second transaction","amount":20});

        var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/expense/delete/"+t_id, requestOptions)
        .then(response => response.text())
        .then(result => {
            fetch("http://localhost:8080/income/"+user_email)
            .then(res => res.json())
            .then(async data => {
                let expenses = await (await fetch("http://localhost:8080/expense/"+user_email)).json()
                this.setState({
                    income : data,
                    expenses : expenses,
                    display : "none",
                    selectedExpense : null
                })
            }).catch(err => {
                console.log(err)
            })
        })
        .catch(error => console.log('error', error));
    }
    

    render () {
        
        if (this.state.expenses.length <= 0)  {
            return <Loader/>
        }

        let transactions = this.state.income.map((transaction, index) => {
            return (
                <tr key={index}>
                    <td>{transaction.id}</td>
                    
                    <td>{transaction.title}</td>
                    <td>Rs. {transaction.amount}</td>
                    <td>{new Date(transaction.publicationDate).toDateString()}</td>
                    <td>
                        <button className="btn btn-outline-danger" onClick={()=>{this.blockIncomeDisplay(index)}}>
                            Delete
                        </button>
                    </td>
                </tr>
            )
        })

        let expenses = this.state.expenses.map((transaction, index) => {
            return (
                <tr key={index}>
                    <td>{transaction.id}</td>
                    
                    <td>{transaction.title}</td>
                    <td>Rs. {transaction.amount}</td>
                    <td>{new Date(transaction.publicationDate).toDateString()}</td>
                    <td>
                        <button className="btn btn-outline-danger" onClick={()=>{this.blockExpenseDisplay(index)}}>
                            Delete
                        </button>
                    </td>
                </tr>
            )
        })

        let total_income = 0;
        this.state.income.forEach(el => {
            total_income += el.amount
        })
        
        let total_expense = 0;
        this.state.expenses.forEach(el => {
            total_expense += el.amount;
        })
        
        let data = {
            labels : ['Total Expense', 'Total Income'],
            datasets : [{
                label : 'Transactions',
                data : [
                    total_expense,
                    total_income
                ],
                backgroundColor : [
                    'rgba(255,99,132,0.6)',
                    'lightgreen'                   
                ]
            }],
            
        }

        let moneyLeftToSpend = total_income - total_expense;
        let perdayExpense = moneyLeftToSpend/(getMonthDay(new Date().getMonth() - new Date().getDay()))

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <h2>All Income</h2>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>T. Id</th>
                                    <th>Title</th>
                                    <th>Income Amount</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                                {transactions}
                            </thead>
                        </table>
                        <h2>All Expenses</h2>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>T. Id</th>
                                    <th>Title</th>
                                    <th>Expense Amount</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                                {expenses}
                            </thead>
                        </table>
                    </div>

                    <div className="col-sm-4" style={{textAlign:"center"}}>
                        <Doughnut
                        data={data}
                        width={200}
                        />
                        <p style={{marginTop : "20px"}}>
                            
                        </p>
                        <h3>
                            You have Rs. {moneyLeftToSpend} left in total to spend.
                        </h3>
                        <p>
                            <b>{perdayExpense <= 0 ? 'You can not spend any amount further. You are already in debt.' : `You can spend Rs. ${parseInt(perdayExpense)} per day.`}</b>
                        </p>
                    </div>
                </div>

                <motion.div class="modal" tabindex="1" style={{display : this.state.display, background:'rgba(0,0,0,.5)'}}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.3}}
                >
                <motion.div class="modal-dialog"
                initial={{y:"-100vh"}}
                animate={{y:0}}
                transition={{delay:0.3}}
                >
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{this.state.selectedExpense ? this.state.selectedExpense.title : ""}{this.state.selectedIncome ? this.state.selectedIncome.title : ""}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>{this.state.selectedExpense ? this.state.selectedExpense.title : ""}</p>
                        <p>{this.state.selectedIncome ? this.state.selectedIncome.title : ""}</p>
                        <p><b>Do you really want to delete this transaction ?</b></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.hideDisplay}>Close</button>
                        <button type="button" class="btn btn-danger" onClick={this.state.selectedExpense ? ()=>{this.deleteExpense(this.state.selectedExpense.id)} : ()=>{this.deleteIncome(this.state.selectedIncome.id)}}>
                            Delete
                        </button>
                    </div>
                    </div>
                </motion.div>
                </motion.div>

            </div>
        )
    }
}


export default Transaction;
