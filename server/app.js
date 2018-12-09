import dotenv from "dotenv";
import next from "next";
import path from "path";
import express from "express";
import mongoose from "mongoose";

import setupMongoose from "./setups/setupMongoose";
import setupSession from "./setups/setupSession";

import { PORT, BASE_URL } from "../utils/Urls";

dotenv.config();

const isDevMode = process.env.NODE_ENV !== "production";

const app = next({ dev: isDevMode });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  setupMongoose(mongoose);
  setupSession({ server, mongoose });

  server.use("/static", express.static(path.join(__dirname, "../public")));

  server.get("/test-session", (req, res) => {
    req.session.temp = "new session";
    res.send("Test Session!!!");
  });

  server.get("*", (req, res) => handle(req, res));

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on ${BASE_URL}`);
  });
});
