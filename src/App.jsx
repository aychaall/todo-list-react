import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

import React ,{useState,useEffect} from "react";
function App() {
  const [todo,setTodo]=useState("");
  const [todos,setTodos]=useState([]);
  function persostData(newList) {
    localStorage.setItem('todos',JSON.stringify({todos:
      newList
    }))
  }
function addTodo(e){
setTodos(prevTodos => {
  const newTodos = [...prevTodos, e];
  persostData(newTodos)
  return newTodos;
});
}
function editTodo(e){
  const valueToBeEdited = todos[e]
  setTodo(valueToBeEdited)
  
  deleteTodo(e)
  
  
  }
  function deleteTodo(e){
const newtodos=todos.filter((todo,todoIndex)=>{return todoIndex!=e} )
persostData(newTodos)
    setTodos(newtodos);
    }

useEffect(() => {
 if(!localStorage){
  return
 }
 let localTodos=localStorage.getItem('todos')
 if(!localTodos){
  return
}
localTodos=JSON.parse(localTodos).todos
setTodos(localTodos)
}, []);

  return (
    <>
           <TodoInput addTodo={addTodo} todo={todo} setTodo={setTodo} />
           <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>

    </>
  )
}

export default App
