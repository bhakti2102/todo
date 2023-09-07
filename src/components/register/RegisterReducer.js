import {  SIGNUP_USER, SIGNUP_USER_FAILURE , SIGNUP_USER_SUCCESS } from "./RegisterType";

const initialState = {
  isLoading: false,
  error: null,
  success: false,
  userData: null
};

export default function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        isLoading: true,
        userData: action.payload,
        error: null,
        success: false
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        success: true
      };
    case SIGNUP_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        success: false
      };
    default:
      return state;
  }
}
