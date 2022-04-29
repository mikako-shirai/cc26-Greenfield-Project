import { React, useState } from "react";
import "../styles/index.css";
import Navbar from "./Navbar.jsx";
import CalendarComponent from "./Calendar.jsx";
import Document from "./Document";
import Event from "./Event.jsx";
import Calendar from "react-calendar/dist/umd/Calendar";
import Task from "./Task.jsx";
import ToDo from "./ToDo";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showDocument, setShowDocument] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [showToDo, setShowToDo] = useState(false);
  const [showEvent, setShowEvent] = useState(false);

  const displayCalender = () => {
    setShowCalendar(true);
  };
  const displayDocument = () => {
    setShowDocument(true);
  };
  const displayToDo = () => {
      setShowToDo(true);
    };
  const displayEvent = () => {
    setShowEvent(true);
  };

  return (
    <div className="app">
      <Navbar 
      displayCalender={displayCalender}
      displayDocument={displayDocument}
      displayToDo={displayToDo}
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
      {showToDo && <ToDo />}
      {showEvent && <Event />}

      <div className="content-wrapper">
        {showCalendar && (
          <CalendarComponent
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            showTask={showTask}
            setShowTask={setShowTask}
          />
        )}
        {showDocument && <Document />}
        {showToDo && <ToDo />}
        {showEvent && <Event />}
      </div>
    </div>
  );
}

export default App;
