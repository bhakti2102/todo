import { ADD_TODO , DELETE_TODO , MARK_COMPLETE , EDIT_TODO, ADD_TODO_FAILED 
, ADD_TODO_SUCESS , GET_TODO , GET_TODO_FAILED, GET_TODO_SUCESS, DELETE_TODO_SUCESS, DELETE_TODO_FAILED 
, EDIT_TODO_FAILED , EDIT_TODO_SUCESS, MARK_TODO_SUCESS} from "./TodoType";

//getTodo
export const getTodo = (payload) => {
    return {
        type: GET_TODO,
    }
}
export const getTodoSucess = (payload) => {
    return {
        type: GET_TODO_SUCESS,
        payload
    }
}

export const getTodoFailed = (payload) => {
    return {
        type: GET_TODO_FAILED,
        payload
    }
}

//addTodo
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}
export const addTodoSucess = (payload) => {
    return {
        type: ADD_TODO_SUCESS,
        payload:{...payload}
    }
}

export const addTodoFailed = (payload) => {
    return {
        type: ADD_TODO_FAILED,
        payload
    }
}

//deleteTodo
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const deleteTodoSucess = (payload) => {
    return {
        type: DELETE_TODO_SUCESS,
        id:payload.id
    }
}

export const deleteTodoFailed = (id) => {
    return {
        type: DELETE_TODO_FAILED,
        id
    }
}




//EDIT Todo
export const editTodo = (data) => {
    return {
        type: EDIT_TODO,
        payload: { id:data.id ,title:data.title,userid:data.userid,status:data.status }

       }
}

export const editTodoSucess = (id , title) => {
    return {
        type: EDIT_TODO_SUCESS,
        payload: { id ,title }
    }
}

export const editTodoFailed = (id , title) => {
    return {
        type: EDIT_TODO_FAILED,
        payload: { id ,title }
    }
}




//Mark Complete Todo
export const markComplete = (id) => {
    return {
        type: MARK_COMPLETE,
        id
    }
}

export const markCompleteTodoSucess = (id ) => {
    return {
        type: MARK_TODO_SUCESS,
        id
    }
}

export const markCompleteTodoFailed = (id) => {
    return {
        type: EDIT_TODO_FAILED,
        id
    }
}