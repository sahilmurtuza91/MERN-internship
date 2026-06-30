const express = require("express");

const router = express.Router();


const validate = require("../middleware/validate");

const { createUserSchema, createLoginSchema } = require("../validation/user.validation");

const { createUser, loginUser } = require("../controller/user.controller")

// Register User
router.post("/register", validate(createUserSchema),createUser);

// login User
router.post("/login", validate(createLoginSchema), loginUser);

module.exports = router;