const express = require("express");
const UsersRoutes = require("./routes/users");
const connectDb = require("./db/connection");
const Requests = require("./models/transaction")
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

io.on('connection', async(socket) => {
  socket.on('request', async(hello) => {
    await Requests.create(request)
		const data = await Requests.find()
		io.emit('request', data)
  })
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
