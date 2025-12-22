import express from "express";
import { getUser } from "../controllers/authControllers.js";
import { requireAuth } from "@clerk/express";


const router = express.Router();

router.post('/user',requireAuth(), getUser)

export default router;