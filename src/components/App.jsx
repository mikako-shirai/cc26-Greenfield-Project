import { React, useState } from "react";
import "../styles/index.css";
import Navbar from "./Navbar.jsx";
import CalendarComponent from "./Calendar.jsx";
import Document from "./Document";
import Event from "./Event.jsx";
import ToDo from "./ToDo";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showTask, setShowTask] = useState(false);

  const [showCalendarPage, setShowCalendarPage] = useState(false);
  const [showDocumentPage, setShowDocumentPage] = useState(false);
  const [showToDoPage, setShowToDoPage] = useState(false);
  const [showEventPage, setShowEventPage] = useState(false);

  const displayCalender = () => {
    setShowCalendarPage(true);
  };
  const displayDocument = () => {
    setShowDocumentPage(true);
  };
  const displayToDo = () => {
    setShowToDoPage(true);
  };
  const displayEvent = () => {
    setShowEventPage(true);
  };

  return (
    <div className="app">
      <Navbar
        displayCalender={displayCalender}
        displayDocument={displayDocument}
        displayToDo={displayToDo}
        displayEvent={displayEvent}
      />

      <div className="mainfield">
        <CalendarComponent
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          showTask={showTask}
          setShowTask={setShowTask}
        />
      </div>

      <div className="content-wrapper">
        {showCalendarPage && (
          <CalendarComponent
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            showTask={showTask}
            setShowTask={setShowTask}
          />
        )}
        <div className="second-wrapper">
          {showDocument && <Document />}
          {showToDo && <ToDo />}
          {showEvent && <Event />}
        </div>
      </div>
    </div>
  );
}

export default App;
