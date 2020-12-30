import React, {Component} from 'react';
import layout from '../Layout';
import { firebase } from "../../firebase/firebase";
import { history } from "../../App";

class AddIncome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : null,
            amount : null,
            date : null
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        if(!(this.state.title && this.state.amount )) {
            return alert('Please fill the details')
        }

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
            console.log(result)
            this.setState({
                title : '',
                amount : ''
            })
            alert('Your transaction has been saved succesfully')
            this.props.history.push('/expenses')
        })
        .catch(error => console.log('error', error));
        
    }

    render () {

        return (
            <layout>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6" style={{margin:"auto"}}>
                            <div className="card">
                                <div className="card-body">
                                    <form action="" method="post" onSubmit={this.onFormSubmit}>
                                        <h3>Add income</h3>
                                        <div className="form-group">
                                           <label htmlFor="title">Title</label> 
                                           <input type="text" name="title" id="title" className="form-control" onChange={this.onChange} value={this.state.title} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="amount">Amount</label>
                                            <input type="number" name="amount" id="amount" className="form-control" step={0.01} onChange={this.onChange} value={this.state.amount} />
                                        </div>
                                        
                                        <div className="form-group">
                                            <input type="submit" value="Add Income" className="btn btn-dark"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </layout>
        )
    }

}

export default AddIncome;
