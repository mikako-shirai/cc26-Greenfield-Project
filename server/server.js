const express = require("express");
const cors = require('cors');
// const db = require("./db");

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:8080' }));
const PORT = process.env.PORT || 8080;

// app.use(express.static(__dirname + "../public"));

app.get("/home", (req, res) => {
  res.send("test");
});

app.get("/docs", (req, res) => {
  res.send();
});

app.get("/tasks", (req, res) => {
  res.send();
});

app.get("/events", (req, res) => {
  res.send(JSON.stringify({"test": "test"}));
});

app.listen(PORT, () => {
  console.log(`Running on port : ${PORT} http://localhost:${PORT}`);
});
