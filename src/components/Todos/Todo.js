import { RiTodoFill } from "react-icons/ri"
import { FaTrash } from "react-icons/fa"
import { BsCheckSquareFill } from "react-icons/bs"
import styles from "./Todo.module.css"

function Todo({ todo, deleteTodo, completeTodo }) {
  return (
    <div key={todo.id} className={todo.complete ? styles.strike : styles.todo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.task}</div>
      <FaTrash
        className={styles.todoIconDelete}
        onClick={() => deleteTodo(todo.id)}
      />
      <BsCheckSquareFill
        className={styles.todoIconComplete}
        onClick={() => completeTodo(todo.id)}
      />
    </div>
  )
}

export default Todo
