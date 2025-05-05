import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { connectToDB, disconnectFromDB } from "./config/database";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());
app.use(express.json());

// ROUTES

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;

const startServer = async (): Promise<void> => {
  try {
    await connectToDB();
    app.listen(PORT, () => {
      console.log("Server started");
    });
  } catch (error) {
    console.error("Failed to start server");
  }
};

process.on("SIGINT", async () => {
  try {
    await disconnectFromDB();
  } catch (error) {
    console.error("Failed to disconnect from DB", error);
    process.exit(1);
  }
});
