import React from "react";
import "./App.css";

export default function Todo({ todo, toggleTodos }) {
  function todoClickHandler() {
    toggleTodos(todo.id);
  }
  return (
    <div className="eachTodo">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={todoClickHandler}
        />
        {todo.name}
      </label>
    </div>
  );
}
