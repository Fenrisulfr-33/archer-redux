export const USER_RESET = 'USER_RESET';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';

import * as userApi from '../../pages/api/userApi';
import { beginApiCall, apiCallError } from "../apiStatus/apiStatusActions";

export const userLoginSuccess = (user) => {
    return { type: USER_LOGIN_SUCCESS, user };
}

export const userRegisterSuccess = (user) => {
    return { type: USER_REGISTER_SUCCESS, user };
}

export const login = (userData) => {
    const ac = new AbortController();
    return function(dispatch){
        dispatch(beginApiCall());
        return userApi.loginUser(userData, ac.signal)
            .then(user => {
                dispatch(userLoginSuccess(user));
            }).catch(error => {
                dispatch(apiCallError(error));
            });
    };
}

export const logout = () => {
    return function(dispatch){
        return dispatch({ type: USER_LOGOUT });
    };
}

export const register = (userData) => {
    return function(dispatch){
        dispatch(beginApiCall());
        return userApi.registerUser(userData)
            .then(user => {
                dispatch(userRegisterSuccess(user));
            }).catch(error => {
                dispatch(apiCallError(error));
            });
    };
}