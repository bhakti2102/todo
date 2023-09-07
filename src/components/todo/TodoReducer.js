import { ADD_TODO , DELETE_TODO , MARK_COMPLETE , EDIT_TODO, ADD_TODO_SUCESS ,GET_TODO 
,GET_TODO_FAILED , GET_TODO_SUCESS , DELETE_TODO_SUCESS , DELETE_TODO_FAILED, EDIT_TODO_SUCESS , 
 MARK_TODO_SUCESS, MARK_TODO_FAILED} from "./TodoType";

const initialState = {
    todos: []
}

const TodoReducer = (state = initialState , action) => 
{
    console.log(action);
    switch (action.type) 
    {
        //ADD-TODO-Reducer
        case ADD_TODO:
            return {
                ...state
            }

        case ADD_TODO_SUCESS:
            const newTodo = {
                id:action.payload.id,
                title: action.payload.title,
                status: false,
              };
        return {
            ...state,
            todos: [...state.todos, newTodo]
        }


        case GET_TODO:
            return {
            ...state,
        }
        
        case GET_TODO_SUCESS:
        return {
            ...state,
            todos: action.payload,
        }

        
        case DELETE_TODO:
        return {
            ...state,
        }
        
        case DELETE_TODO_SUCESS:
        const updatedTodos = state.todos.filter(
            (todo) => todo.id !== action.id
          );
        return {
            ...state,
            todos: updatedTodos
        }
        
        
        case EDIT_TODO:
            return {
                ...state,
              }

        case EDIT_TODO_SUCESS:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                  todo.id === action.payload.id
                    ? { ...todo, title: action.payload.title }
                    : todo
                ),
              };

        
        case MARK_COMPLETE:
            return {
                ...state,
              }

        case MARK_TODO_SUCESS:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                  todo.id === action.id
                    ? { ...todo, status: true }
                    : todo
                ),
              };
        
        default : 
        return state;


    }


}
export default TodoReducer

