import React, {Component} from 'react';
import { firebase } from "../firebase/firebase";

class Dashboard extends Component {

    constructor (props) {
        super(props)
        this.state = {
            user : null
        }
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({
                user : firebase.auth().currentUser
            })
        }, 500);
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
        console.log(this.state.user)
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;