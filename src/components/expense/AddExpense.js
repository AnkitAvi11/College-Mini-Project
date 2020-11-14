import React, {Component} from 'react';
import Layout from '../Layout';

import {firebase} from '../../firebase/firebase';


class AddExpense extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : "",
            amount : "",
            date : ""
        }
    }

    onValChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })   
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let username = firebase.auth().currentUser.email;
        var raw = JSON.stringify({"username":username,"title":this.state.title,"amount":this.state.amount});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/income/add", requestOptions)
        .then(response => response.text())
        .then(result => {
            alert('Your transaction has been saved succesfully');
            console.log(result)
            this.setState({
                title : '',
                amount : ''
            })
        })
        .catch(error => console.log('error', error));
    }

    render () {
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6" style={{margin:"auto"}}>
                            <div className="card">
                                <div className="card-body">
                                    <form action="" method="post" onSubmit={this.onFormSubmit} id="myform">
                                        <h3>Add expense</h3>
                                        <div className="form-group">
                                           <label htmlFor="title">Title</label> 
                                           <input type="text" name="title" id="title" className="form-control" onChange={this.onValChange} value={this.state.title} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="amount">Amount</label>
                                            <input type="number" name="amount" id="amount" className="form-control" step={0.01} 
                                            onChange={this.onValChange}
                                            value={this.state.amount}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Add Expense" className="btn btn-dark"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

}

export default AddExpense;
