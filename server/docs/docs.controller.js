const docsModel = require("./docs.model");

module.exports = {
  async index(req, res) {
    console.log("Get request for docs");
    const docs = await docsModel.getAll();
    res.send(docs);
  },

  async view(req, res) {
    const id = parseInt(req.params.id);
    // console.log("This is the thing I am looking at", id);
    const doc = await docsModel.getById(id);
    res.send(doc);
  },

  async save(req, res, next) {
    const { id, doc, dateTime } = req.body;

    const docObj = {
      doc,
      date_time: dateTime,
    };

    id ? await docsModel.update(id, docObj) : await docsModel.create(docObj);

    res.status(200).send();
  },
};
