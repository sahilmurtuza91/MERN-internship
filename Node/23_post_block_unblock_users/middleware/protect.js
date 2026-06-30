const Jwt = require("jsonwebtoken");

const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");

const User = require("../models/user");

const protect = asyncHandler( async(req, res, next)=>{
    const token = req.cookies?.token;

    if(!token){
        throw new ApiError(
            401,
            "Please Login first"
        )
    }

    const decode = Jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findById(decode.id).select("-password");

    if(!user){
        throw new ApiError(
            404,
            "User not found"
        )
    }
    req.user = user; // this will help in controller to get the user in req
    next(); 
})

module.exports = protect;