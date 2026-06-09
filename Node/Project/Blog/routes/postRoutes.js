const express = require("express");
const router = express.Router();
const { roleBaseRestriction} = require('../middlewares/authMiddleware')
const { 
    createPost,
    updatePost,
    getAllPersonalPost,
    deletePost
} = require("../controllers/postController");

router.post("/", roleBaseRestriction(["USER", "ADMIN"]), createPost);
router.get("/", roleBaseRestriction(["USER", "ADMIN"]), getAllPersonalPost);
router.put("/:id", roleBaseRestriction(["USER", "ADMIN"]), updatePost);
router.delete("/:id", roleBaseRestriction(["ADMIN", "USER"]), deletePost);

module.exports = router;