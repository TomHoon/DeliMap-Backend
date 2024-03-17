/**
 * 소켓시작
 */

const SocketIO = require("socket.io");

const 소켓 = {
  construct: (server) => {
    const io = SocketIO(server, {
      cors: {
        origin: "*",
      },
    });
    io.on("connection", function (socket) {
      socket.on("SEND_MESSAGE", function (data) {
        io.emit("MESSAGE", data);
      });
    });
  },
};

module.exports = 소켓;
