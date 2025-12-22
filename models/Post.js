import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    id:{ type: Number, required: true, unique: true },
    author: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, },
    date: { type: String },
    readTime: { type: String },
    category: { type: String },
    image_url: { type: String },
    content: { type: String },
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);
export default Post;