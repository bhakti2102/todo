import { LOGIN_USER,  LOGIN_USER_FAILURE , LOGIN_USER_SUCCESS } from "./LoginType";

const initialState = {
  user: null,
  loading: false,
  error: null,
};


const LoginReducer = (state = initialState, action) =>
{
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default LoginReducer
