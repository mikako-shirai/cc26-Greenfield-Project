const express = require("express");
const app = express();
const db = require("./db");
const PORT = process.env.PORT || 80;

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));

app.post("/api", async (req, res) => {
  res.status(500);
});

app.listen(PORT, () => {
  console.log(`Running on port : ${PORT} http://localhost:${PORT}`);
});
