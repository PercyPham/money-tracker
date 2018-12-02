import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import setupMongoose from "./setupMongoose";
import setupSession from "./setupSession";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

setupMongoose(mongoose);
setupSession({ server: app, mongoose });

app.get("/", (req, res) => {
  req.session.temp = "new session";
  res.send("Hello there!!!");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
