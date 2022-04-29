import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Event() {
  const [events, setEvents] = useState([]);

  const getAllEvents = async () => {
    const res = await axios.get("/events");
    const eventsAll = res.data;
    setEvents(eventsAll);
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  useEffect(() => {}, [events]);

  return (
    <div className="event">
      <span>data: {
        events.map((obj, index) => <span key={index}>{obj.eventName}</span>)
      }</span>
    </div>
  );
}

export default Event;
