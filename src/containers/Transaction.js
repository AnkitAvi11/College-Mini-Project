import React, {Component} from 'react';
import Loader from '../components/Loader';
import { firebase } from "../firebase/firebase";
import { Doughnut } from 'react-chartjs-2';

class Transaction extends Component {

    constructor(props) { 
        super(props);
        this.state = {
            income : [],
            expenses : []
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
                    'lightgreen',
                    'rgba(255,99,132,0.6)'
                ]
            }],
            
        }

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
                                </tr>
                                {expenses}
                            </thead>
                        </table>
                    </div>

                    <div className="col-sm-4">
                        <Doughnut
                        data={data}
                        width={200}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default Transaction;
