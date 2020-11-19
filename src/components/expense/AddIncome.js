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
        let user = firebase.auth().currentUser;
        if(!(this.state.title && this.state.amount )) {
            return alert('Please fill the details')
        }else{
            console.log(this.state)
            history.push('/dashboard')
        }
        
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
