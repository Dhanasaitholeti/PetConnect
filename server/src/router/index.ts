import { Application, Request, Response } from "express";
import userRoutes from "../router/userRoutes";
import petRoutes from "../router/petRoutes";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const MainRouter = (server: Application) => {
  server.delete("/deleteallchats", async (req: Request, res: Response) => {
    try {
      await prisma.message.deleteMany({});
      await prisma.chat.deleteMany({});
      res.status(200).json({ message: "deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error occured" });
    }
  });

  server.use("/user", userRoutes);
  server.use("/pet", petRoutes);
};

export default MainRouter;
