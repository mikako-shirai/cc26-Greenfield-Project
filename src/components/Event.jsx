import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Event() {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({});
  const [newEvent, setNewEvent] = useState({});

  const getAllEvents = async () => {
    const res = await axios.get("/events");
    const eventsAll = res.data;
    setEvents(eventsAll);
  };

  const getEventById = async (e) => {
    e.preventDefault();
    const id = e.target.value;
    const res = await axios.get(`/events/view/${id}`);
    const selectedEvent = res.data;
    setEvent(selectedEvent);
  };

  const addNewEvent = async () => {
    const testEvent = {
      eventName: 'TEST event',
      description: 'TEST event',
      dateTime: '2022-01-20T00:00:00.000Z'
    }
    await axios.post("/events/save", testEvent);
    await getAllEvents();
    setNewEvent(testEvent);
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  useEffect(() => {
    console.log(event);
  }, [events, event]);

  return (
    <div className="events">
      <h2 className="events-title">Events</h2>

      <div className="search-event">
        <form className="documentform">
          <select className="documentform-week">
            <option value="week1">week1</option>
            <option value="week2">week2</option>
            <option value="week3">week3</option>
            <option value="week4">week4</option>
            <option value="week5">week5</option>
          </select>
          <select className="documentform-name">
            <option value="instructor">instructors</option>
            <option value="student">students</option>
          </select>
          <div className="event-btn">Search Event</div>
        </form>
      </div>

      <div className="show-event">
        <select onChange={getEventById} name="eventId" required>
          <option hidden>-- Event --</option>
          {events.map((event, index) => {
            return <option key={index} value={event.id}>{event.eventName}</option>
          })}
        </select>
        <div className="event-btn-show">Show Event</div>

        <div onClick={addNewEvent} className="event-btn">Add New Event</div>
      </div>

      {event.id ? <div className="event-content">
        <div>Selected Event</div>
        <div>Event Name : {event.eventName}</div>
        <div>Description : {event.description}</div>
        <div>Event Time : {event.dateTime.slice(0,10)}</div>
      </div> : ""}

      {newEvent.eventName ? <div className="event-content">
        <div>New Event</div>
        <div>Event Name : {newEvent.eventName}</div>
        <div>Description : {newEvent.description}</div>
        <div>Event Time : {newEvent.dateTime.slice(0,10)}</div>
      </div> : ""}

    </div>
  );
}

export default Event;
