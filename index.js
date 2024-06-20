const http = require("http");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 4042;
const server = http.createServer(app);

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  res.sendFile("/public/index.html");
});

server.listen(PORT, (req, res) => {
  console.log(`Server started running on port number ${PORT}`);
});
