import React, { useState, useEffect } from "react";

function Task({ date, setShowTask, setNewToDo }) {
  const [task, setTask] = useState("");
  const [type, setType] = useState("todo");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newToDo = {
      task: task,
      type: type,
      date: date.substring(0, 10),
      time: time,
    };
    setTodos([...todos, newToDo]);
    setNewToDo(true);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <div className="task">
        <h2>Task list</h2>
        <p>add your task below</p>
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
              onChange={(e) => {
                setTask(e.target.value);
              }}
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
      </div>
    </>
  );
}

export default Task;
