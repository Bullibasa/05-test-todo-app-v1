import { useState } from "react"

import TodoForm from "./components/Todos/TodoForm"
import TodoList from "./components/Todos/TodoList"
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    if (text) {
      const newText = {
        id: Math.random().toString(36).substr(2, 9),
        task: text,
        complete: false,
      }
      setTodos([...todos, newText])
    }
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const completeTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    )
  }

  return (
    <div className="App">
      <h1>Колличество задач: {todos.length}</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        completeTodo={completeTodoHandler}
      />
    </div>
  )
}

export default App
