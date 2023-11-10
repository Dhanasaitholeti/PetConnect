import dotenv from "dotenv";
dotenv.config(); //for accesing environment variables
import http from "http";
import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import bodyParser from "body-parser";

import MainRouter from "./router"; //for handleing the routes
import socketServer from "socket"; // for websocket connections

const port = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(bodyParser.json());

MainRouter(app);

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

socketServer(io);

httpServer.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});
