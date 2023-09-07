import { combineReducers } from 'redux';
import LoginReducer from './login/LoginReducer';
import RegisterReducer from './register/RegisterReducer';
import TodoReducer from './todo/TodoReducer'


const rootReducer = combineReducers({
    Login: LoginReducer,
    Register: RegisterReducer,
    Todo : TodoReducer
  });
  
  export default rootReducer;