import React, {Component} from 'react';
import layout from '../Layout';


class AddExpense extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : null,
            amount : null,
            date : null
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault()
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
                                        <h3>Add expense</h3>
                                        <div className="form-group">
                                           <label htmlFor="title">Title</label> 
                                           <input type="text" name="title" id="title" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="amount">Amount</label>
                                            <input type="number" name="amount" id="amount" className="form-control" step={0.01} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="date">Date </label>
                                            <input type="date" name="date" id="date" className="form-control"/>
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
            </layout>
        )
    }

}

export default AddExpense;
