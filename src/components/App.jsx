import { React, useState } from "react";
import "../styles/index.css";
import Navbar from "./Navbar";
import Task from "./Task";
import Document from "./Document";
import Event from "./Event";

function App() {
  const [show, toggleShow] = useState(true);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
