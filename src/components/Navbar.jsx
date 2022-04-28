import React from "react";
import Search from "./Searchbtn.jsx";
import Calendar from "react-calendar";
import Document from "./Document.jsx";
import Task from "./Task.jsx";
import Event from "./Event.jsx";


function Navbar() {
  return (
    <div className="navbar">
      <Search />
      <Calendar />
      {/* <Document />
      <Task />
      <Event /> */}
      {/* <a href="calendar">Calendar</a>
      <a href="docs">Docs</a>
      <a href="task">Task</a>
      <a href="event">Events</a> */}
    </div>
  );
}

export default Navbar;
