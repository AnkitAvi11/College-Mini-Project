import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {firebase} from './firebase/firebase';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    console.log("User logged in")
  }else{
    console.log("user not logged in")
  }

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={createStore(()=>{}, applyMiddleware(thunk))}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

});

serviceWorker.unregister();
