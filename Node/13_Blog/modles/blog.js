const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    coverImageURL: {
        type: String,
        required: false,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;