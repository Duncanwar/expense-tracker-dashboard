import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import session from "express-session";
import grantConfig from "./grant.config";
import { connectToDB, disconnectFromDB } from "./config/database";
import route from "./routes";
import grant from "grant";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(
  cors({
    origin: true, // allow all origins
    credentials: true,
  })
);
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(
  session({
    secret: "grant",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(morgan("common"));
// ROUTES
app.get("/", (req, res) => {
  res.status(200).json("Welcome to Expense Tracker");
  console.log("Welcome to Expense Tracker");
});
app.get("/api", (req, res) => {
  console.log("Welcome to Expense Tracker");
  return res.status(200).json({ msg: "Welcome to Expense Tracker" });
});
app.use(grant.express()(grantConfig));
app.use(route);
/* MONGOOSE SETUP */
const PORT = process.env.PORT || 5000;

const startServer = async (): Promise<void> => {
  try {
    await connectToDB();
    app.listen(PORT, () => {
      console.log("Server started", PORT);
    });
  } catch (error) {
    console.error("Failed to start server");
  }
};
startServer().catch(console.error);
process.on("SIGINT", async () => {
  try {
    await disconnectFromDB();
    process.exit(0);
  } catch (error) {
    console.error("Failed to disconnect from DB", error);
    process.exit(1);
  }
});

export default app;
