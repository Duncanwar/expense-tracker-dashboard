import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { connectToDB, disconnectFromDB } from "./config/database";
import route from "./routes";

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
app.get("/", (req, res) => {
  res.status(200).json("Welcome to Expense Tracker");
});
app.use(route);
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
startServer().catch(console.error);
process.on("SIGINT", async () => {
  try {
    await disconnectFromDB();
  } catch (error) {
    console.error("Failed to disconnect from DB", error);
    process.exit(1);
  }
});

export default app;
