const express = require("express");

const router = express.Router();

const { createUser,bulkCreateUsers, getUsers } = require("../controllers/userController");

router.post("/",createUser);
router.post("/bulk", bulkCreateUsers)
router.get("/",getUsers);

module.exports = router;