import { ofType } from "redux-observable";
import { from, of } from "rxjs";
import axios from "axios";
import { mergeMap, map, catchError } from "rxjs/operators";
import { ADD_TODO,  GET_TODO  , DELETE_TODO , EDIT_TODO , MARK_COMPLETE} from "./TodoType";
import {addTodoFailed, addTodoSucess, getTodoFailed, getTodoSucess , deleteTodoFailed , deleteTodoSucess 
, editTodoSucess , editTodoFailed , markCompleteTodoFailed , markCompleteTodoSucess} from "./TodoActions";





export const getTodoEpic = (action$) =>

action$.pipe(
    ofType(GET_TODO),
    mergeMap((action) =>
      from(
        axios.get("http://localhost:8080/todo", {
        })
      ).pipe(
        map((response) => {
            return getTodoSucess(response.data);
        }),
        catchError((error) =>
          of(getTodoFailed("GET Todo Failed !! Please try again"))
        )
      )
    )
  );

  
  export const addTodoEpic = (action$) =>
  action$.pipe(
    ofType(ADD_TODO),
    mergeMap((action) =>
      from(
        axios.post("http://localhost:8080/todo", {
            
            title: action.payload.title,
            status: false,
            userid : action.payload.userid
        })
      ).pipe(
        map((response) => {
            return addTodoSucess(response.data);
        }),
        catchError((error) =>
          of(addTodoFailed("ADD Todo Failed !! Please try again"))
        )
      )
    )
  );


export const deleteTodoEpic = (action$) =>
  action$.pipe(
    ofType(DELETE_TODO),
    mergeMap((action) =>
      from(
        axios.delete(`http://localhost:8080/todo/${action.id}`)
      ).pipe(
        map((response) => {
            return deleteTodoSucess({id: action.id});
        }),
        catchError((error) =>
          of(deleteTodoFailed("DELETE Todo Failed !! Please try again"))
        )
      )
    )
  );


export const editTodoEpic = (action$) =>
  {
    console.log('action',action$);
    return action$.pipe(
    ofType(EDIT_TODO),
    mergeMap((action) =>
      from(
        axios.put(`http://localhost:8080/todo/${action.payload.id }`,{userid:action.payload.userid,title:action.payload.title})
      ).pipe(
        map((response) => {
            return editTodoSucess({id: action.payload.id,title:action.payload.title});
        }),
        catchError((error) =>
          of(editTodoFailed("EDIT Todo Failed !! Please try again"))
        )
      )
    )
  );
  }

  export const markCompleteTodoEpic = (action$) =>
  {
    console.log('action',action$);
    return action$.pipe(
    ofType(MARK_COMPLETE),
    mergeMap((action) =>
      from(
        axios.put(`http://localhost:8080/todo/toggle/${action.id}`)
      ).pipe(
        map((response) => {
            return markCompleteTodoSucess( action.id);
        }),
        catchError((error) =>
          of(markCompleteTodoFailed("MARK Todo Failed !! Please try again"))
        )
      )
    )
  );
  }
  
  

  


