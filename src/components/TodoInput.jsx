import React ,{useState}from 'react'


const TodoInput = (props) => {
const  {addTodo ,todo,setTodo}=props
  
  return (
    <header>
      <input  placeholder='Input Todo...' value={todo} onChange={(e)=>setTodo(e.target.value)} />
      <button onClick={()=>{
        addTodo(todo);
        setTodo("");
      
      }
      }>Add</button>
    </header>
  )
}

export default TodoInput
