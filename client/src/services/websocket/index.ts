import Cookies from "js-cookie";
import { Socket, io } from "socket.io-client";
import { socketUrls } from "../../configs/apis";
import { chatsusers, individualChat } from "../../utils/types/chatSlice.types";
import { initialMsgs } from "../redux/slices/chat.slice";
import { store } from "../redux/store";

let socket: Socket | null = null;

const InitializeSocket = () => {
  const dispatch = store.dispatch;

  if (Cookies.get("authToken") && !socket?.connected) {
    socket = io(socketUrls.connectionUrl, {
      auth: {
        token: Cookies.get("authToken"),
      },
    });

    socket.on("connect", () => {
      console.log("Connected to socker server", socket?.id);
    });

    socket.on(socketUrls.channels.initData, (chatsData) => {
      const extractedmsgs: individualChat = {};
      const extractedChats: chatsusers[] = [];

      // dividing data
      chatsData.chats.forEach((entry: any) => {
        extractedmsgs[entry.id] = entry.messages;
        extractedChats.push({ id: entry.id, partner: entry.members[0].name });
      });

      //dispatching action to store
      dispatch(
        initialMsgs({
          list: extractedChats,
          chats: extractedmsgs,
          error: false,
        })
      );
    });

    socket.on("disconnect", () => {
      console.log("Disconnect from socker server");
      socket?.removeAllListeners();
      socket = null;
    });

    socket.on("message", (message: any) => {
      //testing purpose
      console.log("Got the data", message);
    });
  }
};

//has to update the any with appropriate type anotattion
const emitMessage = (message: any) => {
  socket?.emit(socketUrls.channels.sendMsg, message);
};

export { socket, InitializeSocket, emitMessage };
