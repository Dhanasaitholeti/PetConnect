import { Application, Request, Response } from "express";
import userRoutes from "../router/userRoutes";

const MainRouter = (server: Application) => {
  server.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "This is a message from the server" });
  });

  server.use("/user", userRoutes);
};

export default MainRouter;
