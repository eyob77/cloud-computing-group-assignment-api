import mongoose from "mongoose";

const contentBlockSchema = new mongoose.Schema({
    type: { type: String, enum: ["paragraph", "list", "heading", "image","subheading"], required: true },
    content: { type: String, required: true },
    url: { type: String  }
}, { _id: false });

const postSchema = new mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    date: { type: String },
    readTime: { type: String },
    category: { type: String },
    image: { type: String },
    contents: { type: [contentBlockSchema], default: [] }
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);
export default Post;