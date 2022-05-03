import React, { useState, useEffect } from "react";
import axios from "axios";

function Task({ date, setShowTask, setNewToDo }) {
  const [task, setTask] = useState("");
  const [type, setType] = useState("ToDo");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [toDos, setToDos] = useState([]);
  let passedDate = date.substring(0, 10);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newToDo = {
      task: task,
      title: title,
      type: type,
      date: passedDate,
      time: time,
    };

    setToDos([...toDos, newToDo]);
    setNewToDo(true);
  };

  const validateInput = () => {
    if (toDos.length === 0) return;
    const dataType = toDos[0].type;
    if (dataType === "document") addNewDoc();
    if (dataType === "ToDo") addNewToDo();
    if (dataType === "event") addNewEvent();
  };

  const addNewDoc = async () => {
    const input = toDos[0];
    const newDoc = {
      doc: input.task,
      dateTime: `${input.date} ${input.time}`,
    };

    await axios.post(`http://localhost:8080/docs/save`, newDoc);
  };

  const addNewToDo = async () => {
    const input = toDos[0];
    const newToDo = {
      taskName: input.title,
      taskInfo: input.task,
      dateTime: `${input.date} ${input.time}`,
    };
    await axios.post(`http://localhost:8080/tasks/save`, newToDo);
  };

  const addNewEvent = async () => {
    const input = toDos[0];
    const newEvent = {
      eventName: input.title,
      description: input.task,
      dateTime: `${input.date} ${input.time}`,
    };
    await axios.post(`http://localhost:8080/events/save`, newEvent);
  };

  useEffect(() => {
    console.log(toDos);
    validateInput();
  }, [toDos]);

  return (
    <div className="tasks">
      <div className="tasks-form">
        <form className="tasks-form-inner" onSubmit={handleSubmit}>
          <h2>Task list</h2>
          <p>add your task below</p>
          <p>Selected Date: {date.substring(0, 10) || "not selected"}</p>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="time"
            value={time}
            required
            onChange={(e) => setTime(e.target.value)}
          />
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option hidden>-- item --</option>
            <option>ToDo</option>
            <option>document</option>
            <option>event</option>
          </select>
          <textarea
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
