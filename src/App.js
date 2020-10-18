import React from 'react';
import './App.css';
import Nav from './components/Nav';

import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

class App extends React.Component {
  render() {
    return (
      <Nav/>
    )
  }
}

export default App;
