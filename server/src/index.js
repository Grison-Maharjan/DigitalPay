const express = require("express");
const UsersRoutes = require("./routes/users");
const connectDb = require("./db/connection");
const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(UsersRoutes);

connectDb();
const port = process.env.PORT;

io.on("request", (socket) => {
  socket.on('hello', (hello) => {
    console.log(hello)
  })
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
