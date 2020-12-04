import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser, logoutuser } from "../actions/auth";
import { NavLink, Link } from "react-router-dom";

class Nav extends Component {

    componentDidMount = () => {
        
    }

    render () {

        let private_links = null;

        if (this.props.isloggedin) {
            private_links = (
                <React.Fragment>
                    <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                        {this.props.user.displayName}
                    </NavLink>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/addexpense">Add Expense</Link>
                        <Link className="dropdown-item" to="/addincome">Add Income</Link>
                        <Link className="dropdown-item" to="/expenses">View all details</Link>
                        <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                    </div>
                    </li>
                </React.Fragment>
            )
        }

        return (
            <nav className="navbar navbar-expand-md bg-white navbar-light container" style={{marginBottom : "40px"}}>
                <NavLink className="navbar-brand" to="/" style={{fontWeight:"bolder"}}>Expenser</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
                        </li>
                        
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        {private_links}
                        {
                            this.props.isloggedin ?
                            <button className="btn btn-danger" onClick={this.props.logoutuser}>Logout</button> :
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