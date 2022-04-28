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
  const [showTask, setShowTask] = useState(false);

  const [showCalendar, setCalendar] = useState(false);
  const [showDocument, setDocument] = useState(false);
  const [showTaskList, setTaskList] = useState(false);
  const [showEvent, setEvent] = useState(false);

  const displayCalender = () => {
    setCalendar(true);
  };
  const displayDocument = () => {
    setDocument(true);
  };
  const displayTaskList = () => {
    setTaskList(true);
  };
  const displayEvent = () => {
    setEvent(true);
  };

  return (
    <div className="app">

      <Navbar 
      displayCalender={displayCalender}
      displayDocument={displayDocument}
      displayTaskList={displayTaskList}
      displayEvent={displayEvent} 
      />
      
      <div>
        <CalendarComponent
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          showTask={showTaskList}
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
