import React from "react";

function ToDo() {
    const sampleTodo = [
        {id: 1, todo: "fix the lighting talk"},
        {id: 2, todo: "send email for boss"},
        {id: 3, todo: "check thread on stackoverflow"},
        {id: 4, todo: "submit google form"},
        {id: 5, todo: "find the document about JS"}
    ];


  return (
    <div className="ToDo-component">
        <h2>To Do List</h2>
        {sampleTodo.map((elem)=>((<div>
            <input type="checkbox"></input>
            <input type="date"></input>
                {elem.todo}
            </div>
            )
        ))}
    </div>
  );
}

export default ToDo;