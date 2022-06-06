import React from "react";
import Todo from "./Todo";
export default function TodoList({ todoList, toggleTodos }) {
  return todoList.map((todo) => {
    return <Todo key={todo.id} toggleTodos={toggleTodos} todo={todo} />;
  });
}
