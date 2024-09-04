import { useEffect, useState } from "react"
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from './components/TodoItem';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // console.log("Adding todo:", todo);

    // setTodos(todo)// Problem: all values in todos will be deleted and new one added.

    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]) // The line setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]) adds a new todo item to the beginning of the todos array without losing the existing items. It does this by creating a new array where the new todo (with a unique id) is placed first, followed by the existing todos from the previous state (prev).
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id, todo) => {
    setTodos((prev) => prev.filter((del) => del.id !== id))
  }

  const toggleComplete = (id) => {
    // console.log(id)
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
    //The syntax {...prevTodo, completed: !prevTodo.completed} is used to create a new object based on prevTodo with the completed property updated.

    //The spread operator {...prevTodo} creates a new object with all the properties of prevTodo. This means the new object will initially have the same id, text, and completed properties as prevTodo.
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    // console.log("Current todos:", todos);

    // const todos = JSON.parse(localStorage.setItem("todos", JSON.stringify(todos))); //The variable todos inside the useEffect callback is being redeclared and assigned the value returned by localStorage.setItem, which is undefined.
    localStorage.setItem("todos", JSON.stringify(todos));


  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      {/* Context Provider Override (or Context Value Prop Override) is a concept in React where the value provided to a Context.Provider component via its value prop takes precedence over the default value specified when the context was created using createContext.  */}

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className="w-full">
                <TodoItem todo={todo} />

              </div>

            ))}
          </div>
        </div>
      </div>

    </TodoProvider>
  )
}

export default App
