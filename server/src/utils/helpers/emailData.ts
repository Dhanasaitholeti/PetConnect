import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getUserDataWithEmail(email: string) {
  const Data = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  return Data;
}
