import { PrismaClient } from "@prisma/client";
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
              Name: true,
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
  console.log(chatpartnerdata);
  return chatpartnerdata;
}
