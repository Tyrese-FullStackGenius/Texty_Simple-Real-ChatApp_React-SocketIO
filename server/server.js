const express = require("express");
const socketIo = require("socket.io");

const server = express();

server.use(require("cors")());
server.use(express.json());

const PORT = 9000;
const SOCKETPORT = 7000;
server.listen(PORT, ()=> console.info(":=> Server is live in http://localhost:",PORT))

const io = socketIo(SOCKETPORT, {
    cors:{
        origin: ["http://localhost:5173"]
    }
});

io.on("connection", socket => console.info("#-> Connection triggered with: ", socket.id));

