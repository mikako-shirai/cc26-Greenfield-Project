import Calendar from "react-calendar";
import React from "react";

function CalendarComponent() {
  return (
    <div>
      <Calendar className="react-calendar" showNeighboringMonth={false} />
    </div>
  );
}

//tileContent prop allows us to add item to specific date

export default CalendarComponent;
