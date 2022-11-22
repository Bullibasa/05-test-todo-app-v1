import Todo from "./Todo"
import styles from "./TodoList.module.css"

function TodoList({ todos, deleteTodo, completeTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Список задач пуст</h2>}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
