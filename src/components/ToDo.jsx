import React from "react";

function ToDo() {
  const toDoSamples = [
    { id: 1, todo: "fix the lighting talk" },
    { id: 2, todo: "send email for boss" },
    { id: 3, todo: "check thread on stackoverflow" },
    { id: 4, todo: "submit google form" },
    { id: 5, todo: "find the document about JS" },
  ];

  return (
    <div>
      <h2 className="todo-title">To Do List</h2>
      <div className="todo-wrapper">
        {toDoSamples.map((elem, index) => (
          <div key={index} className="todo-item">
            <input type="checkbox"></input>
            <input type="date"></input>
            {elem.todo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDo;
