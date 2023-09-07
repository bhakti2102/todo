import { combineEpics } from 'redux-observable';
import {loginEpic , signupEpic } from './epics/authEpic'
import { addTodoEpic, deleteTodoEpic, editTodoEpic, getTodoEpic, markCompleteTodoEpic } from './todo/todoEpic';


const rootEpic = combineEpics(loginEpic, signupEpic , addTodoEpic , 
getTodoEpic,deleteTodoEpic , editTodoEpic , markCompleteTodoEpic);

export default rootEpic;