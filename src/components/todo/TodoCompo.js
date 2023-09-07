import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from './TodoActions';



function TodoCompo({ item, status, id, handleStatus, remove, isEdit, changeEdit , userid}) {
 
const dispatch = useDispatch()
const [title, setTitle] = useState(item);
const [isEditState, setIsEditState] =useState(false);

const handleEdit =() =>{
  setIsEditState(true)
 }
  return (
      <tr key={item.id} >
            <td style={{width:"20%"}}>{isEditState ? <input type="text" name="title" value={title} onChange={(e)=>{
                    setTitle(e.target.value);
                }} onKeyDown={async (e)=>{
                    if(e.key === "Enter")
                    {
                      console.log(item);
                      setIsEditState(false)
                        const data = {
                                    title : e.target.value,
                                    id : id,
                                  userid:userid,
                                status:status ? 1 : 0                                 }
                            console.log(data);
                                dispatch(editTodo(data))
                                
                    }
                }}/> : title}</td>
                <td style={{width:"20%"}}>{status ? "Done" : "Pending"}</td>

                <td style={{width:"20%"}}>
                <button type='button' className='button'><img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Check-Logo.png" width="30" height="30" alt="Done" onClick={() => handleStatus(id)}/></button>
                </td>
                <td style={{width:"20%"}}><button type="button" className='button' onClick={()=> handleEdit(id)} >Update </button></td>
                <td style={{width:"20%"}}><button type="button" classname='button' onClick={() => remove(id)}>Delete</button></td>
            </tr>
  )
}

export default TodoCompo
