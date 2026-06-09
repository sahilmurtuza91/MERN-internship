const Post = require("../modles/post");

async function createPost(req, res) {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Title and content are required",
                data: null
            });
        }

        const post = await Post.create({
            title,
            content,
            author: req.user._id
        });

        return res.status(201).json({
            success: true,
            statusCode: 201,
            message: "Post created",
            data: post,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: "Internal server error"
        });
    }
}

async function getAllPersonalPost(req, res) {
    try {
        let posts;
        if (req.user.role === "ADMIN") {
            posts = await Post.find().populate("author", "name email").select("-__v");;
        } else {
            posts = await Post.find({ author: req.user._id })
                .populate("author", "name email")
                .select("-__v");
        }

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Posts fetched",
            data: posts,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: "Internal server error"
        });
    }
}

async function updatePost(req, res) {
    try {
        const checkPost = await Post.findById(req.params.id);
        if (!checkPost) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "Post not found",
                data: null
            });
        }
        if (checkPost.author.toString() !== req.user._id.toString() && req.user.role !== "ADMIN") {
            return res.status(403).json({
                success: false,
                statusCode: 403,
                message: "Unauthorized to update this post",
                data: null
            });
        }
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Post updated",
            data: post,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: "Internal server error"
        });
    }
}

async function deletePost(req, res) {
    try {
        const checkPost = await Post.findById(req.params.id);
        if (!checkPost) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "Post not found",
                data: null,
            })
        }
        if (req.user.role !== "ADMIN" && checkPost.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                statusCode: 403,
                message: "Unauthorized to delete this post",
                data: null
            });
        }
        const post = await Post.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Post deleted successfully",
            data: null
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: "Internal server error"
        });
    }

}

module.exports = {
    createPost,
    getAllPersonalPost,
    updatePost,
    deletePost,
}