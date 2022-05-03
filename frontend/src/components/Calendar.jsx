import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Task from "./Task.jsx";
const moment = require("moment");
function CalendarComponent({
  selectedDate,
  setSelectedDate,
  showTask,
  setShowTask,
  events,
}) {
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
        tileClassName={({ date, view }) => {
          if (
            events.find(
              (x) =>
                x.dateTime.slice(0, 10) === moment(date).format("YYYY-MM-DD")
            )
          ) {
            return "hasTask";
          }
        }}
      />
    </div>
  );
}

export default CalendarComponent;
