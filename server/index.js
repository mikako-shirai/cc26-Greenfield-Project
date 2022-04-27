const express = require("express");
const app = express();
const db = require("./db");
const PORT = process.env.PORT || 80;

app.use(express.json());
// app.use("/", express.static(__dirname + "../public"));

app.post("/", async (req, res) => {
  res.status(500);
});

app.post("/login", async (req, res) => {
  res.status(500);
});

app.post("/signup", async (req, res) => {
  res.status(500);
});

app.post("/home", async (req, res) => {
  res.status(500);
});

app.post("/docs", async (req, res) => {
  res.status(500);
});

app.post("/tasks", async (req, res) => {
  res.status(500);
});

app.post("/events", async (req, res) => {
  res.status(500);
});

app.listen(PORT, () => {
  console.log(`Running on port : ${PORT} http://localhost:${PORT}`);
});
