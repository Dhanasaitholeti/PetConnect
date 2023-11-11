import { socketAuth } from "../middlewares/authMiddleware";
import { Server } from "socket.io";
import eventHandler from "./Events";

const socketServer = (io: Server) => {
  io.use(socketAuth).on("connection", async (socket) => {
    console.log("socket connection succeded", { ...socket });
    eventHandler(io, socket);
  });
};

export default socketServer;
