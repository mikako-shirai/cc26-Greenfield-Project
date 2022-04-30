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

  const [showCalendarPage, setShowCalendarPage] = useState(true);
  const [showDocumentPage, setShowDocumentPage] = useState(false);
  const [showToDoPage, setShowToDoPage] = useState(false);
  const [showEventPage, setShowEventPage] = useState(false);

  const hideEverything = () => {
    setShowCalendarPage(false);
    setShowDocumentPage(false);
    setShowToDoPage(false);
    setShowEventPage(false);
  };

  const displayCalender = () => {
    hideEverything();
    setShowCalendarPage(true);
  };
  const displayDocument = () => {
    hideEverything();
    setShowDocumentPage(true);
  };
  const displayToDo = () => {
    hideEverything();
    setShowToDoPage(true);
  };
  const displayEvent = () => {
    hideEverything();
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

      {/* <div className="mainfield">
        <CalendarComponent
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          showTask={showTask}
          setShowTask={setShowTask}
        />
      </div> */}

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
          {showDocumentPage && <Document />}
          {showToDoPage && <ToDo />}
          {showEventPage && <Event />}
        </div>
      </div>
    </div>
  );
}

export default App;
