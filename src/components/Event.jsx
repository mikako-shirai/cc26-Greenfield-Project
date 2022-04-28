import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Event() {
  const [data, setData] = useState([]);

  const getEvents = async () => {
    const res = await axios.get("/events");
    const data = [res.data.test];
    setData(data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="event">
      <span>EVENT {data}</span>
    </div>
  );
}

export default Event;
