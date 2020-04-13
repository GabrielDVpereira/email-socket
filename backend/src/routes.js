const { Router } = require("express");
const routes = Router();
const EmailController = require("./controllers/EmailController");

routes.get("/list", EmailController.index);
routes.post("/email", EmailController.create);

module.exports = routes;
