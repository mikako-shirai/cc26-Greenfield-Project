const express = require("express");
// const db = require("./db");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 80;

// app.use("/", express.static(__dirname + "../public"));

app.get("/", async (req, res) => {
  console.log("from index.js : /");
});

app.get("/home", async (req, res) => {
  console.log("from index.js : /home");
});

app.get("/login", async (req, res) => {
  console.log("from index.js : /login");
});

app.get("/signup", async (req, res) => {
  console.log("from index.js : /signup");
});

app.get("/docs", async (req, res) => {
  console.log("from index.js : /docs");
});

app.get("/tasks", async (req, res) => {
  console.log("from index.js : /tasks");
});

app.get("/events", async (req, res) => {
  console.log("from index.js : /events");
  res.status(200).send([1,2,3]);
});

app.listen(PORT, () => {
  console.log(`Running on port : ${PORT} http://localhost:${PORT}`);
});
