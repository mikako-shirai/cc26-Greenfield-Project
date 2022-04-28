import Calendar from "react-calendar";
import React, { useState } from "react";
import Task from "./Task.jsx";

function CalendarComponent({
  selectedDate,
  setSelectedDate,
  showTask,
  setShowTask,
}) {
  //   const [selectedDate, setSelectedDate] = useState(null);
  //   const [showTask, setShowTask] = useState(null);
  //Displays modal and Pass Selected Date
  const openWindowForDate = (date) => {
    setSelectedDate(date.toISOString());
  };

  return (
    <div>
      {showTask && <Task date={selectedDate} setShowTask={setShowTask} />}
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
