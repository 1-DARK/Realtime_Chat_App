import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});
const userSocketMap = {}; // used to store online users {userId:socketId}
io.on("connection", (socket) => {
  console.log("A user is connected", socket.id);
  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;
  // io.emmit() is used to send events to all the connected clients
  io.emmit("GetOnlineUsers", Object.keys(userSocketMap));
  socket.on("disconnect", () => {
    console.log("A user is disconnected ", socket.id);
    delete userSocketMap[userId];
    io.emmit("GetOnlineUsers", Object.keys(userSocketMap));
  });
});
export { io, server, app };
