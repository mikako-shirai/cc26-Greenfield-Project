const eventsModel = require("./events.model");

module.exports = {
  async index(req, res) {
    const events = await eventsModel.getAll();
    res.send(events);
  },

  async view(req, res) {
    const id = parseInt(req.params.id);
    const event = await eventsModel.getById(id);
    res.send(event);
  },

  async save(req, res, next) {
    const { id, eventName, description, dateTime } = req.body;

    const event = {
      id,
      eventName,
      description,
      dateTime
    };

    id ? await eventsModel.update(id, event)
       : await eventsModel.create(event);
  }
};
