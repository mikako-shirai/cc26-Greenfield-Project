import React from "react";
import Search from "./Searchbtn.jsx";

function Navbar({ displayCalender, displayDocument, displayToDo, displayEvent }) {

  return (
    <div className="navbar">
      <Search />
      <a onClick={displayCalender}>Calendar</a>
      <a onClick={displayDocument}>Documents</a>
      <a onClick={displayToDo}>ToDo</a>
      <a onClick={displayEvent}>Events</a> 

    </div>
  );
}

export default Navbar;
