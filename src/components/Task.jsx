import React, { useState } from "react";

function Task() {
    const [task, setTasklist] = useState("");
    const initialState = [
        {task: "here is my task", isCompleted: false}
    ];
    const [todos, setTodos] = useState(initialState);

    const getNewTask= (event)=>{
        setTasklist(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(event.target)
        if(task === "")return
        setTodos(todos => [...todos, {task, isCompleted: false}])
        console.log(todos)
        setTasklist("")
    }

    const handleUpdateTask = index =>{
        let newTodos = todos.map((todo,todoIndex) =>{
            if(todoIndex === index){
                todo.isCompleted = !todo.isCompleted
            }
            console.log(todo)
            return todo;
        })
        setTodos(newTodos)
    }

    return (
        <>
        {/* {console.log("task")} */}
        <div className="task">
            <form className="formArea" onSubmit = {handleSubmit}>
                <input value={task} placeholder= "Add New Task"
                onChange={getNewTask} />
                <button type="submit">Add</button>
            </form>

            {todos.map((todo, index)=>(
                <div className ="toDoList" key={index} style ={ todo.isCompleted === true ?
                {textDecorationLine: "line-through"}:{}}>
                    <span onClick={()=>handleUpdateTask(index)}>&#x1F44D;</span>
                    {todo.task}</div>
            ))}
        </div>
       </>
    );
  }
  
  export default Task;