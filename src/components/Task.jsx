import React, { useState } from "react";

function Task({ date, setShowTask }) {
  const [task, setTasklist] = useState("");
  // const initialState = [{ task: "", type: "", date: "", time: "" }];
  const [type, setType] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);

  const getNewTask = (event) => {
    setTasklist(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(task, time, type);
    // if (task === "") return;
    // setTodos((todos) => [...todos, { task, type }]);
    // console.log(todos);
    // setTasklist("");
    setShowTask(false);
  };

  const handleUpdateTask = (index) => {
    let newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.isCompleted = !todo.isCompleted;
      }
      console.log(task, todo, type);
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <div className="task">
        <h2>Task list</h2>
        <p>
          add your task below
        </p>
        <p>Selected Date: {date.substring(0, 10) || "failed"}</p>

        <div className="form-area">
          <form className="documentform" onSubmit={handleSubmit}>
            <input
              type="time"
              value={time}
              required
              onChange={(e) => setTime(e.target.value)}
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option>todo</option>
              <option>document</option>
              <option>event</option>
            </select>
            <input
              value={task}
              placeholder="Add New Task"
              onChange={getNewTask}
            />

            <button type="submit">Add</button>
            <button
              onClick={() => {
                setShowTask(false);
              }}
            >
              Cancel
            </button>
          </form>
        </div>

        {/* {todos.map((todo, index) => (
          <div
            className="to-do-list"
            key={index}
            style={
              todo.isCompleted === true
                ? { textDecorationLine: "line-through" }
                : {}
            }
          >
            <span onClick={() => handleUpdateTask(index)}>&#x1F44D;</span>
            {todo.task}
          </div>
        ))} */}
      </div>
    </>
  );
}

export default Task;
