const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true,
        },
        caption: {
            type: String,
        },
        image: [
            {
                type: String,
                required: true,
            },
        ],
        likes: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
            },
        ],
        comments: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
                comment: {
                    type: String,
                },
                createdAt: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },
    { timestamps: true },
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
