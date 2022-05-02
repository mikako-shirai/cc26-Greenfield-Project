const express = require("express");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 8080;
// const corsOptions = {
//   origin: process.env.DATABASE_URL
//     ? "https://cacoon-morphy.herokuapp.com/"
//     : `http://localhost:${PORT}/`,
//   optionsSuccessStatus: 200,
// };

const app = express();
app.use(express.json());
// app.use(cors(corsOptions));
app.use(cors());

app.use(express.static(path.join(__dirname, "../frontend/public")));

const usersController = require("./users/users.controller");
const schedulesController = require("./schedules/schedules.controller");
const docsController = require("./docs/docs.controller");
const tasksController = require("./tasks/tasks.controller");
const eventsController = require("./events/events.controller");

// users routes
app.get("/users", usersController.index);
app.get("/users/view/:id", usersController.view);
app.post("/users/save", usersController.save);

// schedules routes
app.get("/schedules", schedulesController.index);
app.get("/schedules/view/:id", schedulesController.view);
app.post("/schedules/save", schedulesController.save);

// docs routes
app.get("/docs", docsController.index);
app.get("/docs/view/:id", docsController.view);
app.post("/docs/save", docsController.save);

// tasks routes
app.get("/tasks", tasksController.index);
app.get("/tasks/view/:id", tasksController.view);
app.post("/tasks/save", tasksController.save);

// events routes
app.get("/events", eventsController.index);
app.get("/events/view/:id", eventsController.view);
app.post("/events/save", eventsController.save);

app.listen(PORT, () => {
  console.log(`Running on port : ${PORT} http://localhost:${PORT}`);
});
