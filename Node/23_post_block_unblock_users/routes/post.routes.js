const express = require("express");

const router = express.Router();

const Protect = require("../middleware/protect");
const validate = require("../middleware/validate");
const upload = require("../middleware/multer");

const { createPost, getMyAllPost, getPostByUserId, getFollowingPosts, blockUser, unblockUser, userFollowing } = require("../controller/post.controller");

const { createPostSchema } = require("../validation/post.validation");
const protect = require("../middleware/protect");

router.post("/create",protect, upload.array("image",5), validate(createPostSchema),createPost);

router.get("/my-posts", protect, getMyAllPost);

router.get("/user/:userId",protect, getPostByUserId);

router.get("/feed", protect, getFollowingPosts)

router.put("/block/:id", protect, blockUser);

router.put("/unblock/:id", protect, unblockUser);

router.put("/follow/:id", protect, userFollowing);

router.get("/following-post", protect, getFollowingPosts);

module.exports = router;