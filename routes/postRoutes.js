import express from "express";
import { createPost, getPost } from "../controllers/postControllers.js";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.post("/create", requireAuth(), createPost);
router.get("/", getPost);

export default router;