import { socketAuth } from "../middlewares/authMiddleware";
import { Server } from "socket.io";
import eventHandler from "./Events";
import { addConnectionStatus } from "../utils/helpers/socket/handlerHelpers";
import { initialData } from "../utils/helpers/socket/handlers";

const socketServer = (io: Server) => {
  io.use(socketAuth).on("connection", async (socket) => {
    console.log("socket connection succeded", socket.id);
    addConnectionStatus(socket.userData.id, socket.id);
    initialData(io, socket);
    eventHandler(io, socket);
  });
};

export default socketServer;
