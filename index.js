const http = require("http");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 4042;
const { Server } = require("socket.io");
const { Socket } = require("dgram");
const server = http.createServer(app);
const io = new Server(server);

//socket

io.on("connection", (client) => {
  client.on("user-message", (message) => {
    io.emit("message", message);
  });
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  res.sendFile("/public/index.html");
});

server.listen(PORT, (req, res) => {
  console.log(`Server started running on port number ${PORT}`);
});
