const knex = require("../db/index");

module.exports = {

  getAll(limit=100) {
    return knex.select({
        id: "id",
        username: "username",
        firstName: "first_name",
        lastName: "last_name",
        email: "email",
        password: "password"
      })
      .from("user")
      .limit(limit)
      .catch(console.error());
  },

  getById(id) {
    return knex.select({
        id: "id",
        username: "username",
        firstName: "first_name",
        lastName: "last_name",
        email: "email",
        password: "password"
      })
      .from("user")
      .where("id", id)
      .first()
      .catch(console.error());
  },

  create(user) {
    // validation

    return knex.insert(user).into("user").catch(console.error());
  },

  update(id, user) {
    // validation

    return knex("user")
      .update(user)
      .where("id", id)
      .returning("id")
      .then((id) => id[0].id)
      .catch(console.error());
  }
};
