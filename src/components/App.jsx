import { React, useState } from "react";
import "../styles/index.css";
import Navbar from "./Navbar.jsx";
import CalendarComponent from "./Calendar.jsx";
import Event from "./Event.jsx";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showTask, setShowTask] = useState(false);

  return (
    <div className="app">
      <Navbar />
      <Event />

      <div>
        <CalendarComponent
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          showTask={showTask}
          setShowTask={setShowTask}
        />
      </div>
    </div>
  );
}

export default App;
