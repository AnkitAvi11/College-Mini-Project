import React, {Component} from 'react';
import { connect } from 'react-redux';

import { loginUser } from "../actions/auth";

class Nav extends Component {
    render () {
        return (
            <nav className="navbar navbar-expand-md bg-white navbar-light container" style={{marginBottom : "20px"}}>
                <a className="navbar-brand" href="/">Expenser : Expense Management</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Features</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary" onClick={this.props.loginUser}>Authenticate</button>
                        </li>
                    </ul>
                </div>  
            </nav>
        )
    }
}

export default connect(null, {loginUser})(Nav);