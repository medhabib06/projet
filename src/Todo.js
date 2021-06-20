import React from "react";

export default function Todo({ todo, toggleComplete }) {
  function handleCheckBox() {
    toggleComplete(todo.id);
  }
  return (
    <div style={{ display: "flex" }}>
      <div style={{ textAlign: "center" }}>
        <input type="checkbox" onClick={handleCheckBox} />
      </div>
      <div style={{ textAlign: "center" }}>
        <li  style={{ textDecoration: todo.completed ? "line-through" : null }}>
          {todo.task}
        </li>
      </div>
    </div>
  );
}
