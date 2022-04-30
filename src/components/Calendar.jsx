import Calendar from "react-calendar";
import React, { useState, useEffect } from "react";
import Task from "./Task.jsx";

function CalendarComponent({
  selectedDate,
  setSelectedDate,
  showTask,
  setShowTask,
}) {
  const [newToDo, setNewToDo] = useState(false);
  //Displays modal and Pass Selected Date
  const openWindowForDate = (date) => {
    setSelectedDate(date.toISOString());
  };

  useEffect(() => {
    setNewToDo(false);
    setShowTask(false);
  }, [newToDo]);

  //When you call (onCLickDay) in the calendar it will display Task modal,
  // Isosstringify current date, and send it to Task.jsx component
  return (
    <div className="calendar">
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

//tileContent prop allows us to add item to specific date
// onclick gets selected date
export default CalendarComponent;
