require("dotenv/config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const http = require("http");

const { setUpWebSocket } = require("./websocket");

const server = http.Server(app);
setUpWebSocket(server);

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3333);
