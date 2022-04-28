import { React, useState } from "react";
import "../styles/index.css";
import Navbar from "./Navbar.jsx";
import CalendarComponent from "./Calendar.jsx";
import Document from "./Document";
import Event from "./Event.jsx";
import Calendar from "react-calendar/dist/umd/Calendar";
import Task from "./Task";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showDocument, setShowDocument] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [showTaskList, setShowTaskList] = useState(false);
  const [showEvent, setShowEvent] = useState(false);

  const displayCalender = () => {
    setShowCalendar(true);
  };
  const displayDocument = () => {
    setShowDocument(true);
  };
  const displayTaskList = () => {
    setShowTaskList(true);
  };
  const displayEvent = () => {
    setShowEvent(true);
  };

  return (
    <div className="app">

      <Navbar 
      displayCalender={displayCalender}
      displayDocument={displayDocument}
      displayTask={displayTaskList}
      displayEvent={displayEvent} 
      />
      
      <div>
        <CalendarComponent
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          showTask={showTask}
          setShowTask={setShowTask}
        />
      </div>

      {showCalendar && <Calendar />}
      {showDocument && <Document />}
      {showTaskList && <Task />}
      {showEvent && <Event />}

    </div>
  );
}

export default App;
