import React from "react";
import { useEffect, useState } from "react";

function Event() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("/events");
      console.log(data);
      // setData(data);
    })();
  }, []);

  return (
    <div className="event">
      <p>EVENT component</p>
      <p>{data}</p>
    </div>
  );
}

export default Event;
