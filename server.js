import express from "express";
import dotenv from 'dotenv'
import connectToDb from "./lib/connectingToDb.js";

import authRoute from "./routes/authRoutes.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 3000;



const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // RL
    credentials: true,
  })
);

app.use(express.json());
app.use(clerkMiddleware())

app.use("/api/auth",authRoute);


app.listen(PORT, () => {
    connectToDb()
  console.log("Server is running on port "+PORT);
});