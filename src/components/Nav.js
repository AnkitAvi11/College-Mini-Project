import React, {Component} from 'react';
import { connect } from 'react-redux';

import { loginUser, logoutuser } from "../actions/auth";
import { NavLink } from "react-router-dom";

class Nav extends Component {

    componentDidMount = () => {
        
    }

    render () {
        return (
            <nav className="navbar navbar-expand-md bg-white navbar-light container" style={{marginBottom : "20px"}}>
                <NavLink className="navbar-brand" to="/">Expenser : Expense Management</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/features" activeClassName="active">Features</NavLink>
                        </li>
                        {
                            this.props.isloggedin ?
                            <button className="btn btn-outline-danger" onClick={this.props.logoutuser}>Logout</button> :
                            <li className="nav-item">
                            <button className="btn btn-primary" onClick={this.props.loginUser}>Authenticate</button>
                            </li>
                        }
                    </ul>
                </div>  
            </nav>
        )
    }
}

export default connect(null, {loginUser, logoutuser})(Nav);