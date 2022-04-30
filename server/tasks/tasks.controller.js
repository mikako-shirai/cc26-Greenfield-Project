const tasksModel = require("./tasks.model");

module.exports = {
  async index(req, res) {
    const tasks = await tasksModel.getAll();
    res.send(tasks);
  },

  async view(req, res) {
    const id = parseInt(req.params.id);
    const task = await tasksModel.getById(id);
    res.send(task);
  },

  async save(req, res, next) {
    const { id, taskName, taskInfo, dateTime } = req.body;

    const task = {
      task_name: taskName,
      task_info: taskInfo,
      date_time: dateTime
    };

    id ? await tasksModel.update(id, task)
       : await tasksModel.create(task);

    res.status(200).send();
  }
};
