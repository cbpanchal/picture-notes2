import firebase from "../config/Fire";

import * as actionTypes from "../constants/actionTypes";

export const login = credentials => dispatch => {
    firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(auth => {
            dispatch({
                type: actionTypes.LOGIN,
                payload: auth.user
            });
        })
        dispatch({
            type: actionTypes.LOGIN
        });
};

export const signup = formData => dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then( res => {
          debugger;
      })
      .catch(error => {
        dispatch({
          type: '',
          payload: {
            level: "error",
            title: "Registration failed",
            message: error.message,
            position: "tr"
          }
        });
      });
    dispatch({
      type: actionTypes.SIGNUP
    });
  };