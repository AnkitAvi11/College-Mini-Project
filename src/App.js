import React from 'react';
import './App.css';
import Nav from './components/Nav';

import createHistory from 'history/createBrowserHistory';
import { Switch, Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

export const history = createHistory();

const dashboard = () => {
  return (
    <p>Dashboard</p>
  )
}

const unauth = () => {
  return(
    <p>Un-authenticated</p>
  )
}

class App extends React.Component {

  constructor () {
    super();
  }

  render() {
    return (
      <Router history={history}>
        <Nav 
        isloggedin = {this.props.user ? true : false}
        />
        <Switch>
          <PrivateRoute path="/dashboard" component={dashboard} isloggedin={this.props.user ? true : false} />
          <Route path="/unauthenticated" component={unauth} />
        </Switch>
      </Router>
    )
  }
}

export default  (App);
