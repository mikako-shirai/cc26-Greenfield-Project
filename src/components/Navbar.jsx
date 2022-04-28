import React,{useState} from "react";
import Search from "./Searchbtn.jsx";
import Calendar from "react-calendar";
import Document from "./Document.jsx";
import Task from "./Task.jsx";
import Event from "./Event.jsx";


function Navbar() {

  const [showCalendar, setCalendar] = useState(true);
  const [showDocument, setDocument] = useState(true);
  const [showTask, setTask] = useState(true);
  const [showEvent, setEvent] = useState(true);
  
  return (
    <div className="navbar">
      <Search />

      {showCalendar && <a onClick={()=>{
        setCalendar(false)
      }}>Calender</a> 
      || <Calendar/>}

      {showDocument && <a onClick={()=>{
        setDocument(false)
      }}>Document</a> 
      || <Document/>}

      {showTask && <a onClick={()=>{
        setTask(false)
      }}>Task</a> 
      || <Task/>}

      {showEvent && <a onClick={()=>{
        setEvent(false)
      }}>Event</a> 
      || <Event/>}

    </div>
  );
}

export default Navbar;
