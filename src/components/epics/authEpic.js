import { ofType } from "redux-observable";
import { from, of } from "rxjs";
import axios from "axios";
import { mergeMap, switchMap, map, catchError } from "rxjs/operators";
import { loginUserFailure , loginUserSuccess } from "../login/LoginActions";
import { LOGIN_USER } from "../login/LoginType";
import { signupUserSuccess , signupUserFailure } from "../register/RegisterActions";
import { SIGNUP_USER } from "../register/RegisterType";




export const loginEpic = (action$) =>

  action$.pipe(
    ofType(LOGIN_USER),
    mergeMap((action) =>
      from(
        axios.post("http://localhost:8080/login", {
          userid: action.payload.username,
          password: action.payload.password,
        })
      ).pipe(
        map((response) => {
          if (response.data === 'Correct') {
            return loginUserSuccess(action.payload);
          } else {
            return loginUserFailure(response.data);
          }}),
        catchError((error) =>
          of(loginUserFailure("Login failed. Please try again."))
        )
      )
    )
  );
  
  

  export const signupEpic = (action$) => {
    return action$.pipe(
      ofType(SIGNUP_USER),
      switchMap((action) => {
        return from(
          axios.post('http://localhost:8080/signup', action.payload)
        ).pipe(
          map((response) => {
            return signupUserSuccess(response.data);
          }),
          catchError((error) => {
            return of(signupUserFailure(error.response.data));
          })
        );
      })
    );
  };


