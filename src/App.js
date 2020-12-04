import React from 'react';
import './App.css';
import Nav from './components/Nav';

import createHistory from 'history/createBrowserHistory';
import { Switch, Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './containers/Home';
import notFound from './components/Notfound';
import AddExpense from './components/expense/AddExpense'
import AddIncome from "./components/expense/AddIncome";
import Dashboard from "./containers/Dashboard";
import Transaction from './containers/Transaction';

export const history = createHistory();

class App extends React.Component {

  constructor () { 
    super();
  }

  isloggedin = () => {
    return this.props.user ? true : false
  }

  render() {
    return (
      <Router history={history}>
        {/* Navigation bar */}
        <Nav 
          isloggedin = {this.isloggedin()}
          user={this.props.user}
        />

        {/* All the routes */}
        <Switch>
          
          <Route path="/" component={Home} exact />

          <PrivateRoute path="/dashboard" component={Dashboard} isloggedin={this.isloggedin()} />

          <PrivateRoute path="/addexpense" component={AddExpense}
          isloggedin={this.isloggedin()} />

          <PrivateRoute path="/addincome" component={AddIncome} isloggedin={this.isloggedin()} />

          <PrivateRoute path="/expenses" component={Transaction} isloggedin={this.isloggedin} />

          <Route path="/unauthenticated" component={()=><p>Not authenticated</p>} />

          <Route
          component={notFound}
          />

        </Switch>
        
      </Router>
    )
  }
}

export default  (App);
