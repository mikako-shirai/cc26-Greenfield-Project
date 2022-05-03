import React from "react";
import Weather from "./Weather.jsx";
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
      <img src={Logo} alt="logo" className="logo" />
      <Search />
      <ul>
        <li onClick={displayCalender}>Calendar</li>
        <li onClick={displayDocument}>Documents</li>
        <li onClick={displayToDo}>ToDo</li>
        <li onClick={displayEvent}>Events</li>
      </ul>
      <Weather />
    </div>
  );
}

export default Navbar;
