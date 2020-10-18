import React from 'react';
import './App.css';
import Nav from './components/Nav';

import createHistory from 'history/createBrowserHistory';
import { Switch, Router } from 'react-router-dom';

export const history = createHistory();

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

        </Switch>
      </Router>
    )
  }
}

export default  (App);
