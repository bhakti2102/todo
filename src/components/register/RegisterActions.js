import { SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE } from './RegisterType';

export const signupUser = (userData) => ({
  type: SIGNUP_USER,
  payload: userData,
});

export const signupUserSuccess = (response) => ({
  type: SIGNUP_USER_SUCCESS,
  payload :response,
});

export const signupUserFailure = (error) => ({
  type: SIGNUP_USER_FAILURE,
  payload: error,
});