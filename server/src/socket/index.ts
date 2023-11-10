import { Server } from "socket.io";

const socketServer = (io: Server) => {
  io.on("connection", async (socket) => {
    console.log("socket connection succeded", { ...socket });
  });
};

export default socketServer;
