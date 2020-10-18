
import { firebase, GoogleAuthProvider } from "../firebase/firebase";

const startAuth =  () => {
    return {
        type : 'AUTH_START'
    }
}

const authError = (err) => {
    return {
        type : 'AUTH_ERROR',
        payload : err
    }
}

const authSuccess = (user) => {
    return {
        type : 'AUTH_SUCCESS',
        payload : user
    }
}

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

export const logoutuser = () => {
    return dispatch => {
        firebase.auth().signOut()
        .then()
        .catch(err => console.log(err))
    }
}
