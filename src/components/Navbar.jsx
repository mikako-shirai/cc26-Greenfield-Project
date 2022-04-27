import React from "react";
import Search from "./Searchbtn";
// import Task from "./Task";

function Navbar() {
  return (
    <div className="navbar">
      <Search />
      <a href="calendar">Calendar</a>
      <a href="docs">Docs</a>
      <a href="task">Task</a>
      <a href="event">Events</a>
    </div>
  );
}

export default Navbar;
