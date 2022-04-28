import React, { useState } from "react";

function Task({ date, setShowTask }) {
  const [task, setTasklist] = useState("");
  const initialState = [{ task: "here is my task", isCompleted: false }];
  const [todos, setTodos] = useState(initialState);
  const [hide, setHide] = useState(false);

  const getNewTask = (event) => {
    setTasklist(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    if (task === "") return;
    setTodos((todos) => [...todos, { task, isCompleted: false }]);
    console.log(todos);
    setTasklist("");
    setHide(true);
  };

  const handleUpdateTask = (index) => {
    let newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.isCompleted = !todo.isCompleted;
      }
      console.log(todo);
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
          <br />
          push "&#x1F44D;" after finish it!
        </p>
        <p>Selected Date: {date.substring(0, 10) || "failed"}</p>
        <div className="form-area">
          <div>
            <p>Type of task</p>
            <input type="checkbox" name="Document" />
            <label for="Document">Document</label>
            <input type="checkbox" name="Task" />
            <label for="Task">Task</label>
            <input type="checkbox" name="Event" />
            <label for="Event">Event</label>
          </div>
          <input
            value={task}
            placeholder="Add New Task"
            onChange={getNewTask}
          />

          <button
            type="submit"
            onClick={() => {
              setShowTask(false);
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              setShowTask(false);
            }}
          >
            cancel
          </button>
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
