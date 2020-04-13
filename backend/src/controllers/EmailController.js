const Email = require("../models/Email");
const { sendData } = require("../websocket");

module.exports = {
  async index(req, res) {
    try {
      const emailList = await Email.find();
      return res.json({ emails: emailList });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  async create(req, res) {
    const { title, body } = req.body;

    try {
      const email = await Email.create({ title, body });
      sendData("new_email", email);
      return res.json({ email });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
