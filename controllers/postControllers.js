export const createPost = async (req, res) => {
    try {
        console.log("HI from create post")
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const getPost = async(req,res)=>{
    try {
        console.log('hi from getPost')
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}