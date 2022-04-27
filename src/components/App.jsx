import { React, useState } from "react";
import "../styles/index.css";
import Navbar from "./Navbar.jsx";
import Task from "./Task.jsx";

function App() {
  const [show, toggleShow] = useState(true);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
