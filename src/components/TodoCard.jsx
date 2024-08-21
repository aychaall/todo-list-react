import React from 'react'

export default function TodoCard(props) {
  const {children,deleteTodo,editTodo,index}= props;
  return (
    <li className='todoItem' >
{children}
<div className='actionsContainer'>
<i className="fa-regular fa-pen-to-square"onClick={()=>editTodo(index)} ></i>
<i className="fa-solid fa-trash"onClick={()=>deleteTodo(index)}></i>
</div>
        </li>
  )
}
