const express = require("express");
const db = require("./db");

const PORT = process.env.PORT || 80;
const app = express();

app.use(express.json());
app.use("/", express.static(__dirname + "../public"));

app.get("/home", async (req, res) => {
  console.log("from index.js");
});

app.get("/login", async (req, res) => {
  console.log("from index.js");
});

app.get("/signup", async (req, res) => {
  console.log("from index.js");
});

app.get("/docs", async (req, res) => {
  console.log("from index.js");
});

app.get("/tasks", async (req, res) => {
  console.log("from index.js");
});

app.get("/events", async (req, res) => {
  console.log("from index.js");
});

app.listen(PORT, () => {
  console.log(`Running on port : ${PORT} http://localhost:${PORT}`);
});
