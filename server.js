import express from "express";
import dotenv from 'dotenv'
import connectToDb from "./lib/connectingToDb.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";



import authRoute from "./routes/authRoutes.js";
import postRoute from "./routes/postRoutes.js";

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 3000;



const app = express();


const allowedOrigins = [
  process.env.FRONTEND_URL,
];

app.use(cors({
  origin: "*",
  credentials: true
}));

app.use(express.json());
app.use(clerkMiddleware())

app.use("/api/auth",authRoute);
app.use("/api/post/",postRoute)


app.listen(PORT, () => {
    connectToDb()
  console.log("Server is running on port "+PORT);
});