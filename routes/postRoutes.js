import express from "express";
import { createPost, getPost, getPostById } from "../controllers/postControllers.js";
import { requireAuth } from "@clerk/express";
import { upload } from "../lib/multer.js";

const router = express.Router();

router.post("/create",requireAuth(), upload.array("images"),createPost);
router.get("/", getPost);
router.get("/id/:id", getPostById);

export default router;