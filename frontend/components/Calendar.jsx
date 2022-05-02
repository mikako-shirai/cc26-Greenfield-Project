import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

import Task from "./Task.jsx";

function CalendarComponent({ selectedDate, setSelectedDate, showTask, setShowTask,}) {
  const [newToDo, setNewToDo] = useState(false);

  const openWindowForDate = (date) => {
    setSelectedDate(date.toISOString());
  };

  useEffect(() => {
    setNewToDo(false);
    setShowTask(false);
  }, [newToDo]);

  return (
    <div>
      <h2 className="calendar-title">Calendar</h2>
      {showTask && (
        <Task
          date={selectedDate}
          setShowTask={setShowTask}
          setNewToDo={setNewToDo}
        />
      )}
      <Calendar
        className="react-calendar"
        onClickDay={(value) => {
          setShowTask(true);
          openWindowForDate(value);
        }}
        minDetail={"decade"}
        showNeighboringMonth={false}
      />
    </div>
  );
}

export default CalendarComponent;
