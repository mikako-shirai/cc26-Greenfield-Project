const schedulesModel = require("./schedules.model");

module.exports = {
  async index(req, res) {
    const schedules = await schedulesModel.getAll();
    res.send(schedules);
  },

  async view(req, res) {
    const id = parseInt(req.params.id);
    const schedule = await schedulesModel.getById(id);
    res.send(schedule);
  },

  async save(req, res, next) {
    const { id, userId, docId, taskId, eventId, dateTime } = req.body;

    const schedule = {
      id,
      userId,
      docId,
      taskId,
      eventId,
      dateTime
    };

    id ? await schedulesModel.update(id, schedule)
       : await schedulesModel.create(schedule);
  }
};
