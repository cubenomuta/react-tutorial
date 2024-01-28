import { useState, useRef } from 'react';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if(name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
    });
    todoNameRef.current.value = "";
  };

  const handleToggleTodo = (id) => {
    //todosの値を直接変えるのは良くないので、展開して中身をコピーした配列を作成する
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const countCheckBox = () => {
    return todos.filter(todo => todo.completed === false).length;
  }

  const handleDeleteTodo = () => {
    const notCompletedTodo = todos.filter((todo) => todo.completed === false);
    setTodos(notCompletedTodo);
  }

  return (
    <>
      {/* TodoListコンポーネントにtodosの値を渡すための記述 */}
      <TodoList todos={ todos } handleToggleTodo={ handleToggleTodo }/> 
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleDeleteTodo}>完了したタスクの削除</button>
      <div>残りのタスク: { countCheckBox() }</div>
    </>
  );
}

export default App;
