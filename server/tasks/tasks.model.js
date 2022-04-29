const knex = require("../db/index");

module.exports = {

  getAll(limit=100) {
    return knex.select({
        id: "id",
        taskName: "task_name",
        taskInfo: "task_info",
        dateTime: "date_time"
      })
      .from("tasks")
      .limit(limit)
      .catch(console.error());
  },

  getById(id) {
    return knex.select({
        id: "id",
        taskName: "task_name",
        taskInfo: "task_info",
        dateTime: "date_time"
      })
      .from("tasks")
      .where("id", id)
      .first()
      .catch(console.error());
  },

  create(task) {
    // validation

    return knex.insert(task).into("tasks").catch(console.error());
  },

  update(id, task) {
    // validation

    return knex("tasks")
      .update(task)
      .where("id", id)
      .returning("id")
      .then((id) => id[0].id)
      .catch(console.error());
  }
};
