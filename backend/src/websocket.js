const socketio = require("socket.io");

let io;

exports.setUpWebSocket = (server) => {
  io = socketio(server);
  io.listen(5000);

  io.on("connection", (socket) => {
    console.log("user is connected!");
    console.log(socket.id);

    socket.on("teste", (data) => {
      console.log(data);
    });
  });
};

exports.sendData = (message, data) => {
  io.emit(message, data);
};
