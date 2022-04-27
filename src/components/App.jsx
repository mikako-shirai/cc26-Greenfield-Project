import { React, useState } from "react";
import "../styles/index.css";
import Navbar from "./Navbar";
import Task from "./Task"

function App() {
  const [show, toggleShow] = useState(true);
  return (
    <div className="App">
      <Navbar />
      <Task />
    </div>
  );
}

export default App;
