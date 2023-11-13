import { Server, Socket } from "socket.io";
import {
  createMessage,
  getChatPartner,
  getUserChatsWithId,
} from "./handlerHelpers";

export async function sendDatatoConncetion(
  io: Server,
  socket: Socket,
  Data: { chatId: string; senderId: string; content: string }
) {
  const { chatId, senderId, content } = Data;
  try {
    const newmsg = await createMessage(chatId, senderId, content);

    const ChatpartnerData = await getChatPartner(chatId, senderId);
    io.to(ChatpartnerData.members[0].connectionId).emit(
      "receive_messages",
      newmsg
    );
  } catch (err) {
    console.log(err);
  }
}

export const initialData = async (io: Server, socket: Socket) => {
  const chatsData = await getUserChatsWithId(socket.userData.id.toString());
  io.to(chatsData.connectionId).emit("initialData", chatsData);
};
