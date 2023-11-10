import { Application, Request, Response } from "express";
import userRoutes from "../router/userRoutes";
import petRoutes from "../router/petRoutes";

const MainRouter = (server: Application) => {
  server.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "This is a message from the server" });
  });

  server.use("/user", userRoutes);
  server.use("/pet", petRoutes);
};

export default MainRouter;
