import React, { useState } from "react";
import TodoForm from "./Todoform";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function togglecomplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  }

  return (
    <div>
      <h1>Todo list</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={togglecomplete} />
    </div>
  );
}

export default App;
