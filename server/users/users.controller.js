const usersModel = require("./users.model");

module.exports = {
  async index(req, res) {
    const users = await usersModel.getAll();
    res.send(users);
  },

  async view(req, res) {
    const id = parseInt(req.params.id);
    const user = await usersModel.getById(id);
    res.send(user);
  },

  async save(req, res, next) {
    const { id, username, firstName, lastName, email, password } = req.body;

    const user = {
      id,
      username,
      firstName,
      lastName,
      email,
      password
    };

    id ? await usersModel.update(id, user)
       : await usersModel.create(user);
    
    res.status(200).send();
  }
};
