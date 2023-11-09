import { Application, Request, Response } from "express";

const MainRouter = (server: Application) => {
  server.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "This is a message from the server" });
  });
};

export default MainRouter;
