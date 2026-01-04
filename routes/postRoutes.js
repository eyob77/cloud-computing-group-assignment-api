import express from "express";
import { createPost, getPost } from "../controllers/postControllers.js";
import { requireAuth } from "@clerk/express";
import { upload } from "../lib/multer.js";

const router = express.Router();

router.post("/create",requireAuth(), upload.array("images"),createPost);
router.get("/", getPost);

export default router;