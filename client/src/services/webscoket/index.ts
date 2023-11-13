import Cookies from "js-cookie";
import { Socket, io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { socketUrls } from "../../configs/apis";

let socket: Socket | null = null;

const InitializeSocket = () => {
  const dispatcher = useDispatch();

  if (Cookies.get("SynkToken") && !socket) {
    socket = io(socketUrls.connectionUrl, {
      auth: {
        token: Cookies.get("authToken"),
      },
    });

    socket.on("connect", () => {
      console.log("Connected to socker server");
    });

    socket.on("message", (message: any) => {
      //testing purpose
      console.log("Got the data", message);
    });

    socket.on(socketUrls.channels.initData, (chatsData) => {
      console.log(chatsData);
      //   dispatcher(
      //     updateUser({
      //       user: {
      //         userId: chatsData.id,
      //         userEmail: chatsData.Email,
      //         userName: chatsData.Name,
      //       },
      //       err: false,
      //     })
      //   );

      //   const extractedmsgs: extractedMsgsType = {};
      //   chatsData.chats.forEach((each: any) => {
      //     extractedmsgs[each.id] = each.messages;
      //   });
      //   console.log(extractedmsgs);
      //   dispatcher(updateMsgs({ msgs: extractedmsgs, err: false })); //dispatching action alogn with payload to update data in store

      //   const extractedchats = chatsData.chats.map((each: any) => ({
      //     ChatId: each.id,
      //     Chatpartner: each.members[0].Name,
      //     ChatpartnerId: each.members[0].id,
      //   }));
      //   console.log(extractedchats);
      //   dispatcher(updateChats({ chats: extractedchats, err: false })); //dispatching action alogn with payload to update data in store
    });

    socket.on("disconnect", () => {
      console.log("Disconnect from socker server");
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
