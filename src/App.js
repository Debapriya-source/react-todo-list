import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const todoRef = useRef();
  // const LOCAL_STORAGE_KEY = "tasks";

  //Adding a new task
  function addTodo(e) {
    const name = todoRef.current.value;
    if (name === "") return;
    setTodos((prevtodos) => {
      return [...prevtodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoRef.current.value = null;
  }

  //Initializing the tasks from local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("Tasks"));
    // console.log("ls is-> ", storedTodos);
    if (storedTodos) {
      console.log("Setting prev values-> ", storedTodos);
      setTodos(storedTodos);
    }
  }, []);

  //putting the items into local storage
  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(todos));
  }, [todos]);

  //toggle tasks
  function toggleTodos(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }
  //clear completed tasks
  function handleClear() {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }
  return (
    <>
      <div className="heading">
        <h1>TodoList</h1>
      </div>
      <div className="todoContainer">
        <div className="leftTodos">
          <p>
            You have {todos.filter((todo) => !todo.completed).length} tasks left
            to do
          </p>
        </div>

        <div className="inputContainer">
          <input
            ref={todoRef}
            type="text"
            placeholder="Enter your tasks here"
          />
          <br />
          <button onClick={addTodo}>Add new task</button>
          <br />
          <button onClick={handleClear} style={{ marginTop: 0 }}>
            Clear Completed Tasks
          </button>
        </div>

        <div className="listTodos">
          <TodoList todoList={todos} toggleTodos={toggleTodos} />
        </div>
      </div>
    </>
  );
}

export default App;
