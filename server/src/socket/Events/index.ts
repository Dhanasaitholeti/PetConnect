import { Server, Socket } from "socket.io";
import chatEvent from "./chatEvent";
import disconnect from "./disconnect";

const eventHandler = (io: Server, socket: Socket) => {
  //insert the differnt events which invokes the functions
  chatEvent(io, socket);
  disconnect(socket);
};

export default eventHandler;
