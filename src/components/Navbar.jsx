import React from "react";
import Search from "./Searchbtn.jsx";

function Navbar({ displayCalender, displayDocument, displayTask, displayEvent }) {

  return (
    <div className="navbar">
      <Search />
      <a onClick={displayCalender}>Calendar</a> 
      <a onClick={displayDocument}>Document</a>
      <a onClick={displayTask}>Task</a>
      <a onClick={displayEvent}>Event</a> 

    </div>
  );
}

export default Navbar;
