import { PrismaClient } from "@prisma/client";
import GetDateTime from "../getDateTime";
const prisma = new PrismaClient();

export async function getUserChatsWithId(id: string) {
  const Chats = await prisma.user.findFirst({
    where: {
      id,
    },
    include: {
      chats: {
        select: {
          id: true,
          messages: true,
          members: {
            where: {
              NOT: {
                id: id, // Filter out the member with the connected ID
              },
            },
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  return Chats;
}

export async function createMessage(
  chatId: string,
  senderId: string,
  content: string
) {
  const newmsg = await prisma.message.create({
    data: {
      content,
      senderId,
      chatId,
      sentTime: GetDateTime(),
    },
  });
  return newmsg;
}

export async function getChatPartner(ChatId: string, senderId: string) {
  const chatpartnerdata = await prisma.chat.findUnique({
    where: {
      id: ChatId,
    },
    include: {
      members: {
        where: {
          NOT: {
            id: senderId,
          },
        },
        select: {
          id: true,
          name: true,
          connectionId: true,
        },
      },
    },
  });

  return chatpartnerdata;
}

export async function addConnectionStatus(
  userId: string,
  connectionId: string
) {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      connectionId: connectionId,
    },
  });
}

export async function removeConnectionStatus(userId: string) {
  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        connectionId: null, // Set the status to "InActive"
      },
    });
  } catch (error) {
    console.log(error);
  }
}
