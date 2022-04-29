import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Event() {
  const [events, setEvents] = useState([]);

  const getAllEvents = async () => {
    const res = await axios.get("/events");
    const eventsAll = res.data;
    // setEvents(eventsAll);
    console.log(eventsAll)
  };

  const addNewEvent = async () => {
    const testEvent = {
      eventName: 'TEST event',
      description: 'TEST event',
      dateTime: '2022-01-20T00:00:00.000Z'
    }
    await axios.post("/events/save", testEvent);
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div className="event">
      <span>data: {
        events.map((obj, index) => <span key={index}>{obj.eventName}</span>)
      }</span>

      <p onClick={async () => {await addNewEvent();}} style={{ cursor: "pointer" }}>add event</p>
    </div>
  );
}

export default Event;
