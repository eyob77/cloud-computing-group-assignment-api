import Post from "../models/Post.js";
import cloudinary from "../lib/cloudinary.js";

export const createPost = async (req, res) => {
  try {
    const files = req.files || [];
    const body = req.body.post ? JSON.parse(req.body.post) : {};

    const uploadedUrls = [];
    for (const file of files) {

      const dataUri = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
      const result = await cloudinary.uploader.upload(dataUri, { folder: "posts" });
      uploadedUrls.push(result.secure_url || result.url);

      body.contents.find(contentBlock => contentBlock.type === "image" && contentBlock.content === file.originalname).url = result.secure_url || result.url;
    }

    

    const newPost = new Post({
      author: body.author || "",
      title: body.title || "",
      description: body.description || "",
      date: body.date || new Date().toISOString(),
      readTime: body.readTime || body.read_time || "",
      category: body.category || "",
      image: uploadedUrls.length ? uploadedUrls[0] : body.image || "",
      contents: body.contents || []
    });

    await newPost.save();
    console.log(newPost);

    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const getPost = async(req,res)=>{
    try {
        console.log('hi from getPost')
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}