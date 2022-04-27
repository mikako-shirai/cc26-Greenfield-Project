import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <form action="">
        <input type="text" />
        <button>Search</button>
      </form>

      <a href="calendar">Calendar</a>
      <a href="docs">Docs</a>
      <a href="task">Task</a>
      <a href="event">Events</a>
    </div>
  );
}

export default Navbar;
