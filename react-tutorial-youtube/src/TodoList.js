import React from 'react';
import Todo from './Todo'

// propsを書くことでApp.jsからtodosの値を受け取ることができる
// todosにはApp.jsで定義した複数の値が入っている(配列)
const TodoList = ({ todos, handleToggleTodo }) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} handleToggleTodo={handleToggleTodo}/>);
}

export default TodoList;
