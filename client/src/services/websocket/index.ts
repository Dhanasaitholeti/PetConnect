import Cookies from "js-cookie";
import { Socket, io } from "socket.io-client";
import { socketUrls } from "../../configs/apis";
import { chatsusers, individualChat } from "../../utils/types/chatSlice.types";
import { initialMsgs } from "../redux/slices/chat.slice";
import { useDispatch } from "react-redux";
import { store } from "../redux/store";

let socket: Socket | null = null;

const InitializeSocket = () => {
  const dispatch = store.dispatch;

  console.log("starting socket");
  if (Cookies.get("authToken") && !socket?.connected) {
    socket = io(socketUrls.connectionUrl, {
      auth: {
        token: Cookies.get("authToken"),
      },
    });

    socket.on("connect", () => {
      console.log("Connected to socker server", socket?.id);
    });

    socket.on("message", (message: any) => {
      //testing purpose
      console.log("Got the data", message);
    });

    socket.on(socketUrls.channels.initData, (chatsData) => {
      console.log(chatsData);

      const extractedmsgs: individualChat = {};
      const extractedChats: chatsusers[] = [];
      chatsData.chats.forEach((entry: any) => {
        extractedmsgs[entry.id] = entry.messages;
        extractedChats.push({ id: entry.id, partner: entry.members[0].name });
      });
      console.log(extractedmsgs);
      console.log(extractedChats);
      dispatch(
        initialMsgs({
          list: extractedChats,
          chats: extractedmsgs,
          error: false,
        })
      );
      console.log("Done dispatching");
    });

    socket.on("disconnect", () => {
      console.log("Disconnect from socker server");
      socket?.removeAllListeners();
      socket = null;
    });
  }
};

//has to update the any with appropriate type anotattion
const emitMessage = (message: any) => {
  socket?.emit(socketUrls.channels.sendMsg, message);
};

const createchat = (Data: any) => {
  socket?.emit(socketUrls.channels.createChat, Data);
};

export { socket, InitializeSocket, emitMessage, createchat };

// {
//   id: 'e267b458-9138-488e-a1dc-aefc70e05f21',
//   name: 'Test user',
//   email: 'example@gmail.com',
//   password_hash: '$2a$10$OoYin2i.arCx1zsdffOYj.6IWyBvg24qWeokI33jZAyVCJD3xBctm',
//   connectionId: 'T0PGS63e1E1AjNmTAAAP',
//   chats: [
//     {
//       id: '834ddeb5-c481-42c7-bbec-246aa56ac1d9',
//       messages: [],
//       members: [
//         { id: '3b09ce89-bac0-4611-a43f-58eb0920fa75', name: 'super user' }
//       ]
//     }
//   ]
// }
