import Calendar from "react-calendar";
import React, { useState } from "react";
import Task from "./Task.jsx";

function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showTask, setShowTask] = useState(false);

  const openWindowForDate = (date) => {
    setShowTask(true);
    console.log(date.toISOString());
  };

  return (
    <div>
      {showTask && <Task />}
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

//tileContent prop allows us to add item to specific date
// onclick gets selected date
export default CalendarComponent;
