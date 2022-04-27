import { React, useState } from "react";
import "../styles/index.css";
import Navbar from "./Navbar";

function App() {
  const [show, toggleShow] = useState(true);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
