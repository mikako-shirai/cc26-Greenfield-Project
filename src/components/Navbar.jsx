import React from "react";
import Search from "./Searchbtn.jsx";

function Navbar({
  displayCalender,
  displayDocument,
  displayToDo,
  displayEvent,
}) {
  return (
    <div className="navbar">
      <Search />
      <ul>
        <li onClick={displayCalender}>Calendar</li>
        <li onClick={displayDocument}>Documents</li>
        <li onClick={displayToDo}>ToDo</li>
        <li onClick={displayEvent}>Events</li>
      </ul>
    </div>
  );
}

export default Navbar;
