import React, { useEffect, useState } from "react";
import axios from "axios";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});

  const getAllTodos = async () => {
    const res = await axios.get("http://localhost:8080/tasks");
    const todosAll = res.data;
    setTodos(todosAll.reverse());
  };

  const getTodoById = async (e) => {
    e.preventDefault();
    const id = e.target.value;
    const res = await axios.get(`http://localhost:8080/tasks/view/${id}`);
    const selectedTodo = res.data;
    setTodo(selectedTodo);
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  useEffect(() => {
    console.log(todo);
  }, [todos, todo]);

  return (
    <div className="todo">
      <h2 className="todo-title">To Do List</h2>

      <div className="show-todo">
        <select onChange={getTodoById} required>
          <option hidden>-- ToDo --</option>
          {todos.map((todo, index) => {
            return (
              <option key={index} value={todo.id}>
                {todo.taskName}
              </option>
            );
          })}
        </select>
        <button>Show To Do</button>
      </div>

      {todo.id ? (
        <div className="todo-item todo-selected">
          <div className="item-title">{todo.taskName}</div>
          <div>Due Time : {todo.dateTime.slice(0, 10)}</div>
          <div>Description : {todo.taskInfo}</div>
        </div>
      ) : (
        ""
      )}

      <div className="todo-wrapper">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <div className="item-title">{todo.taskName}</div>
            <div>Due Time : {todo.dateTime.slice(0, 10)}</div>
            <div>Description : {todo.taskInfo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDo;
