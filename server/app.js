import dotenv from "dotenv";
import next from "next";
import express from "express";
import mongoose from "mongoose";

import setupMongoose from "./setupMongoose";
import setupSession from "./setupSession";

dotenv.config();

const port = process.env.PORT || 3000;
const ROOT_URL = `http://localhost:${port}`;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  setupMongoose(mongoose);
  setupSession({ server, mongoose });

  server.get("/test-session", (req, res) => {
    req.session.temp = "new session";
    res.send("Test Session!!!");
  });

  server.get("*", (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on ${ROOT_URL}`);
  });
});
