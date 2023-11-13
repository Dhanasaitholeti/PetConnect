import { Server, Socket } from "socket.io";
import { sendDatatoConncetion } from "../../utils/helpers/socket/handlers";

const chatEvent = (io: Server, socket: Socket) => {
  socket.on("sendMsg", async (Data) => {
    await sendDatatoConncetion(io, socket, Data);
  });
};

export default chatEvent;
