import { Server, Socket } from "socket.io";
import { sendDatatoConncetion } from "../../utils/helpers/socket/handlers";

const chatEvent = (io: Server, socket: Socket) => {
  socket.on("sendmessage", async (Data) => {
    await sendDatatoConncetion(io, Data);
  });
};

export default chatEvent;
