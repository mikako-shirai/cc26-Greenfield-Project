import React from "react";
import Search from "./Searchbtn.jsx";
import Logo from "../images/Morpho.png";

function Navbar({
  displayCalender,
  displayDocument,
  displayToDo,
  displayEvent,
}) {
  return (
    <div className="navbar">
      <div className="logo-wraper">
        <img src={Logo} alt="logo" className="logo" />
      </div>
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
