const config = require("../../knexfile");
const knex = require("knex")(config);

module.exports = {

  getAll(limit=100) {
    return knex.select({
        id: "id",
        doc: "doc",
        dateTime: "date_time"
      })
      .from("docs")
      .limit(limit)
      .catch(console.error());
  },

  getById(id) {
    return knex.select({
        id: "id",
        doc: "doc",
        dateTime: "date_time"
      })
      .from("docs")
      .where("id", id)
      .first()
      .catch(console.error());
  },

  create(doc) {
    // validation

    return knex.insert(doc).into("docs").catch(console.error());
  },

  update(id, doc) {
    // validation

    return knex("docs")
      .update(doc)
      .where("id", id)
      .returning("id")
      .then((id) => id[0].id)
      .catch(console.error());
  }
};
