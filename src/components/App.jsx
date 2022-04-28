import { React, useState } from "react";
import "../styles/index.css";
// import "react-calendar/dist/Calendar.css";
import Navbar from "./Navbar.jsx";
import Task from "./Task.jsx";
import CalendarComponent from "./Calendar.jsx";

function App() {
  const [show, toggleShow] = useState(true);
  return (
    <div className="app">
      <Navbar />
      <div>
        <CalendarComponent />
      </div>
    </div>
  );
}

export default App;
