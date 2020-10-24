
import { firebase, GoogleAuthProvider } from "../firebase/firebase";

import { history } from "../App";

//  action for authentication start
const startAuth =  () => {
    return {
        type : 'AUTH_START'
    }
}

//  action if authentication returns any error
const authError = (err) => {
    return {
        type : 'AUTH_ERROR',
        payload : err
    }
}


//  action for succesful authentication
const authSuccess = (user) => {
    return {
        type : 'AUTH_SUCCESS',
        payload : user
    }
}


//  user action to log the user in using google O-auth
export const loginUser = () => {
    return (dispatch => {
        dispatch(startAuth());
        firebase.auth().signInWithPopup(GoogleAuthProvider)
        .then(res => {
            authSuccess(res);
        }).catch(err => {
            dispatch(authError(err));
        });
    });
}


//  action to log the user out of the application
export const logoutuser = () => {
    return dispatch => {
        firebase.auth().signOut()
        .then(()=>history.push('/'))
        .catch(err => console.log(err))
    }
}
