import React, {Component} from 'react';

class About extends Component {
    render(){
        return (
            <div className="container">
                <h3>
                    About Expenser
                </h3>
                <h6>
                    Expenser is an Expense Management application which helps you manage your expenses and incomes easily with a beautiful user experience.
                    Looking for an expense and budget tool? Stop searching. Expense Manager is simple, intuitive, stable and feature-rich app that is just designed for you. Everything you need at your fingertips to manage the expenditures, checkbook and budgets.
                </h6>
                <h3 style={{marginTop : "40px"}}>
                    Technologies and Tech Stack Used 
                </h3>
                <div className="card-columns" style={{fontWeight:"bolder"}}>
                    <div className="card">
                        <div className="card-body">React JS and Redux for Frontend</div>
                    </div>
                    <div className="card">
                        <div className="card-body">JAVA</div>
                    </div>
                    <div className="card">
                        <div className="card-body">Springboot</div>
                    </div>
                    <div className="card">
                        <div className="card-body">Intellij IDEA</div>
                    </div>
                    <div className="card">
                        <div className="card-body">React JS and Redux for Frontend</div>
                    </div>
                    <div className="card">
                        <div className="card-body">Google Open Authentication 2.0</div>
                    </div>
                    <div className="card">
                        <div className="card-body">MYSQL for the Backend Database</div>
                    </div>
                    <div className="card">
                        <div className="card-body">Data Visualization and Analysis</div>
                    </div>
                    <div className="card">
                        <div className="card-body">REST API</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;