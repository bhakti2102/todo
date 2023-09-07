import React from "react";
import TodoCompo from './TodoCompo';
import { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, getTodo, markComplete } from "./TodoActions";


function TodoList() {

const [Title, setTitle] = useState("");
const [add, setAdd] = useState([]);
const [itemEdited,setItemEdited] = React.useState(null);
const [isupdated,setIsupdated] = React.useState(false);
const dispatch = useDispatch();
const {Login , Todo} = useSelector((state)=>state);

//getTodo
useEffect(() => {
  dispatch(getTodo())
}, []);

//Todos-Array-Update 
useEffect(() => {
}, [Todo])


const handleTitle = (e) =>
{
  setTitle(e.target.value)
}

const addTitle = (e) =>{
  dispatch (addTodo({title:Title , status:false , userid: Login?.user?.username}))
}

const handleStatus = (id) => {
  setAdd(
      add.map((e) => (e.id === id) && (e.status === false) ? {...e, status: true } : e)
      );
      dispatch(markComplete(id))
}

const remove = (id) => {
  dispatch(deleteTodo(id))
  
}

const changeEdit = () => {}

  return (
    <div className="todo-card">
      <h1>Todo List !!</h1>
      <input className="todo-input" type="text" placeholder="Enter your list item here ..." onChange={handleTitle} value={Title}/>
     <div style={{display:"flex", justifyContent:"center"}}>
      <button className="todo-button" type="button" onClick={addTitle} >
        {" "}
        Add{" "} 
      </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Work</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
              {Todo?.todos?.map((item , id) => {
                  if(itemEdited === item.id)
                  {
                  return <TodoCompo key={id} item={item.title} status={item.status} id={item.id} userid={item.userid}
                  handleStatus={handleStatus} remove={remove}   isEdit={isupdated} changeEdit={changeEdit} />
                  }
                  else
                  {
                  return <TodoCompo key={id} item={item.title} status={item.status} id={item.id} userid={item.userid}
                  handleStatus={handleStatus} remove={remove}   changeEdit={changeEdit} />
                  }
                })}
            </tbody>
        </table>
    </div>
  );
}

export default TodoList;
