import React from 'react';
import './App.css';
import Nav from './components/Nav';

import createHistory from 'history/createBrowserHistory';
import { Switch, Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './containers/Home';
import notFound from './components/Notfound';

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
        />

        {/* All the routes */}
        <Switch>
          
          <Route path="/" component={Home} exact />

          <PrivateRoute path="/dashboard" component={()=><p>Dashboard</p>} isloggedin={this.isloggedin()} />

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
