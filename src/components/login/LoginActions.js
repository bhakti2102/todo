import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "./LoginType";

export const loginUser = (username , password) => {
    return { 
        type: LOGIN_USER,
        payload : {username , password}
}
}

export const loginUserSuccess = (user) => { 
   return { 
    type: LOGIN_USER_SUCCESS, 
    payload: user
   }
}

export const loginUserFailure = (error) => {
return {   
    type : LOGIN_USER_FAILURE,
    payload: error
    }
}