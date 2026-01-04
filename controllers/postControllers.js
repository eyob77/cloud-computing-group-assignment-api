export const createPost = async (req, res) => {
  try {
    console.log("FILES:", req.files); // array
    console.log("BODY:", req.body);   // { post: 'JSON string' }

    const post = JSON.parse(req.body.post);

    console.log("PARSED POST:", post);

    res.status(200).json({ message: "Post created successfully" });
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