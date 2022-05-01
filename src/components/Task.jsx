import React, { useState, useEffect } from "react";

function Task({ date, setShowTask, setNewToDo }) {
  const [task, setTask] = useState("");
  const [type, setType] = useState("toDo");
  const [time, setTime] = useState("");
  const [toDos, setToDos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newToDo = {
      description: task,
      type: type,
      date: date.substring(0, 10),
      time: time,
    };

    setToDos([...toDos, newToDo]);
    setNewToDo(true);
  };

  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <div className="tasks">
      <div className="tasks-form">
        <form className="tasks-form-inner" onSubmit={handleSubmit}>
          <h2>Task list</h2>
          <p>add your task below</p>
          <p>Selected Date: {date.substring(0, 10) || "not selected"}</p>

          <input
            type="time"
            value={time}
            required
            onChange={(e) => setTime(e.target.value)}
          />
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>ToDo</option>
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
  );
}

export default Task;
