import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar.jsx";
import CalendarComponent from "./Calendar.jsx";
import Document from "./Document";
import ToDo from "./ToDo";
import Event from "./Event.jsx";
import "../styles/index.css";
function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showTask, setShowTask] = useState(false);

  const [showCalendarPage, setShowCalendarPage] = useState(true);
  const [showDocumentPage, setShowDocumentPage] = useState(false);
  const [showToDoPage, setShowToDoPage] = useState(false);
  const [showEventPage, setShowEventPage] = useState(false);
  const [events, setEvents] = useState([]);

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

  const getAllEvents = async () => {
    const res = await axios.get("http://localhost:8080/events");
    let eventsAll = res.data;
    setEvents(eventsAll.reverse());
  };
  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div className="app">
      <Navbar
        displayCalender={displayCalender}
        displayDocument={displayDocument}
        displayToDo={displayToDo}
        displayEvent={displayEvent}
      />

      <div className="content-wrapper">
        {showCalendarPage && (
          <CalendarComponent
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            showTask={showTask}
            setShowTask={setShowTask}
            events={events}
          />
        )}

        <div>
          {showDocumentPage && <Document />}
          {showToDoPage && <ToDo />}
          {showEventPage && <Event events={events} />}
        </div>
      </div>
    </div>
  );
}

export default App;
