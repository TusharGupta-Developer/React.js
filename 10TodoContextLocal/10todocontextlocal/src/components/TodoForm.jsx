import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
  
  const [todo, setTodo] = useState([])

  const {addTodo} = useTodo();

  const add = (e) =>{
    e.preventDefault()
    //This line ensures that the rest of the function does not execute when todo is empty
    if(!todo) return
    
    // addTodo({id: Date.now, todo:todo, completed: false})
    addTodo({todo, completed: false})//passed as an single argument because we acyually pass single object
    setTodo("")
  }

  return (

    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"

        value={todo} //The value prop of the <input> is set to todo, so the input field will display whatever is in todo. Since todo is an array (which isn't a valid display value), React will implicitly convert it to an empty string and display nothing in the input field.

        onChange={(e) => setTodo(e.target.value)} //setTodo(e.target.value) will update todo with the new string value, and the input field reflects this change.
        
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;

