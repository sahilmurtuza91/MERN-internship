const mongoose = require("mongoose")
const User = require("../models/user");
const sendToken = require("../utils/sendToken");

const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");


const createUser = asyncHandler(async (req, res) => {
    const { name, email, username, password } = req.body;

    // checking for the duplicacte email
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
        throw new ApiError(
            409,
            "Email already used",
        );
    }

    // checking for the duplicate username
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
        throw new ApiError(
            409,
            "Username already exists. Please choose another username.",
        );
    }

    // create the new user
    const user = await User.create({
        name,
        email,
        username,
        password
    });

    sendToken(user, 201, res, "User registered successfully.");
})


const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username }).select("+password");
    if (!user) {
        throw new ApiError(
            401,
            "Invalid Email or password"
        )
    };

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        throw new ApiError(
            401,
            "Invalid Email or password"
        )
    }

    sendToken(user, 200, res, "Login successful.");
})

module.exports = {
    createUser,
    loginUser,
}