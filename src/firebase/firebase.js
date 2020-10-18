import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDBTEe7kLQYcfq2ezbns8NxIGwSNnZ-uF8",
    authDomain: "miniproject-4f415.firebaseapp.com",
    databaseURL: "https://miniproject-4f415.firebaseio.com",
    projectId: "miniproject-4f415",
    storageBucket: "miniproject-4f415.appspot.com",
    messagingSenderId: "202798339035",
    appId: "1:202798339035:web:49733991aa7a0d77504dfe",
    measurementId: "G-GZXRL7RNKV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {GoogleAuthProvider, firebase}