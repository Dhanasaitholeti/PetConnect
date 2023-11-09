import dotenv from "dotenv";
dotenv.config(); //for accesing environment variables
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import MainRouter from "./router";

const port = process.env.PORT || 8080;

const server = express();

server.use(cors());
server.use(bodyParser.json());

MainRouter(server);

server.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});
