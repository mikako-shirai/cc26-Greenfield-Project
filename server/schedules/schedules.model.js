const knex = require("../db/knex");

module.exports = {

  getAll(limit=100) {
    return knex.select({
        id: "id",
        userId: "userId",
        docId: "docId",
        taskId: "taskId",
        eventId: "eventId",
        dateTime: "date_time",
      })
      .from("user_schedule")
      .limit(limit)
      .catch(console.error());
  },

  getById(id) {
    return knex.select({
        id: "id",
        userId: "userId",
        docId: "docId",
        taskId: "taskId",
        eventId: "eventId",
        dateTime: "date_time",
      })
      .from("user_schedule")
      .where("id", id)
      .first()
      .catch(console.error());
  },

  create(schedule) {
    // validation

    return knex.insert(schedule).into("user_schedule").catch(console.error());
  },

  update(id, schedule) {
    // validation

    return knex("user_schedule")
      .update(schedule)
      .where("id", id)
      .returning("id")
      .then((id) => id[0].id)
      .catch(console.error());
  }
};
