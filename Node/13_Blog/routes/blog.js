const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const Blog = require("../modles/blog");
const Comment = require("../modles/comment");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve("./public/uploads"))
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    },
});

const upload = multer({ storage: storage })

router.get('/add-new', (req, res) => {
    return res.render("addBlog", {
        user: req.user,
    })
})

router.post("/", upload.single("coverImage"), async (req, res) => {
    const { title, content, summary, category } = req.body;
    const blog = await Blog.create({
        title,
        content,
        summary,
        category,
        author: req.user._id,
        coverImageURL: `/uploads/${req.file.filename}`,
    });
    return res.redirect(`/blog/${blog._id}`);
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findById(id).populate("author", "fullName").lean();
    const comments = await Comment.find({ blogId: id })
        .populate("createdBy", "fullName")
        .lean();
    return res.render("Blog", {
        user: req.user,
        blog,
        comments,
    });
});

router.post("/comment/:blogId", async (req, res)=>{
    if (!req.user) {
        return res.redirect("/users/signin");
    }
    const comment = await Comment.create({
        content: req.body.content,
        blogId: req.params.blogId,
        createdBy: req.user._id,
    });
    return res.redirect(`/blog/${req.params.blogId}`);
})

module.exports = router;