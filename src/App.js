import React from 'react';
import './App.css';
import Nav from './components/Nav';

import createHistory from 'history/createBrowserHistory';
import { Switch, Router } from 'react-router-dom';

export const history = createHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Nav/>
        <Switch>

        </Switch>
      </Router>
    )
  }
}

export default App;
