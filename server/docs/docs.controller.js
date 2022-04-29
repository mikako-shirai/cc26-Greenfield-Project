const docsModel = require("./docs.model");

module.exports = {
  async index(req, res) {
    const docs = await docsModel.getAll();
    res.send(docs);
  },

  async view(req, res) {
    const id = parseInt(req.params.id);
    const doc = await docsModel.getById(id);
    res.send(doc);
  },

  async save(req, res, next) {
    const { id, doc, dateTime } = req.body;

    const docObj = {
      id,
      doc,
      dateTime
    };

    id ? await docsModel.update(id, docObj)
       : await docsModel.create(docObj);
    
    res.status(200).send();
  }
};
