const knex = require("../db/index");

module.exports = {

  getAll(limit=100) {
    return knex.select({
        id: "id",
        eventName: "event_name",
        description: "description",
        dateTime: "date_time"
      })
      .from("events")
      .limit(limit)
      .catch(console.error());
  },

  getById(id) {
    return knex.select({
        id: "id",
        eventName: "event_name",
        description: "description",
        dateTime: "date_time"
      })
      .from("events")
      .where("id", id)
      .first()
      .catch(console.error());
  },

  create(event) {
    // validation

    return knex.insert(event).into("events").catch(console.error());
  },

  update(id, event) {
    // validation

    return knex("events")
      .update(event)
      .where("id", id)
      .returning("id")
      .then((id) => id[0].id)
      .catch(console.error());
  }
};
