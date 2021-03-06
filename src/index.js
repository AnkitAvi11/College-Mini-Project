import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {firebase} from './firebase/firebase';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

//  keeps looking for any change in the state i.e. from login to logout or logout to login
firebase.auth().onAuthStateChanged((user) => {
  
  //  just to check if the user is logged in or not (does nothing except this)
  if (user) {
    console.log('user loggedin')
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={createStore(()=>{}, applyMiddleware(thunk))}>
          <App 
          user={user}
          />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }else{
    console.log('User logged out')
  }

  //  Calling out the render function here to maintain a global authentication state
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={createStore(()=>{}, applyMiddleware(thunk))}>
        <App 
        user={user}
        />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

});

serviceWorker.register();
