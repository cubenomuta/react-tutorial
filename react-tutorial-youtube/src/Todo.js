import React from 'react'

const Todo = ({ todo , handleToggleTodo, countCheckBox}) => {
  const handleCheckTodo = () => {
    handleToggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} readOnly onChange={handleCheckTodo}></input>
      </label>
        {todo.name}
    </div>
  )
}

export default Todo