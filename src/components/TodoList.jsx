import React from 'react';
import TodoCard from "./TodoCard"
export default function TodoList(props) {
  const {todos}=props
  return (
    <ul className='main'>
      {todos.map((e,eindex)=>{
        return (
        <TodoCard {...props} key={eindex} index={eindex}>
<p>
  {e}
</p>
        </TodoCard>
        )
      })}
    </ul>
  )
}
