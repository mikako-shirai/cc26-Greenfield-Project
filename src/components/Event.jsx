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

  const addNewEvent = async () => {
    const testEvent = {
      eventName: 'TEST event',
      description: 'TEST event',
      dateTime: '2022-01-20T00:00:00.000Z'
    }
    await axios.post("/events/save", testEvent);
    await getAllEvents();
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div className="event" style={{ margin: "50px" }}>
      <div>data: {
        events.map((obj, index) => <div key={index}>{obj.eventName}</div>)
      }</div>

      <div
        onClick={async () => {await addNewEvent();}}
        style={{ cursor: "pointer", background: "#ddd" }}
      >add event</div>
    </div>
  );
}

export default Event;
