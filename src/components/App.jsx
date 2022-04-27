import { React, useState } from "react";
import "../styles/index.css";
<<<<<<< HEAD
import Navbar from "./Navbar.jsx";
import Task from "./Task.jsx";
=======
import Navbar from "./Navbar";
import Task from "./Task";
import Document from "./Document";
import Event from "./Event";
>>>>>>> 3b29835b90f8cca7a8659812a4076a89c4ceea80

function App() {
  const [show, toggleShow] = useState(true);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
