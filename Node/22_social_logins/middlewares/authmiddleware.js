const jwt = require("jsonwebtoken");
const User = require("../models/user");

const protect = async (req, res, next)=>{
    try{
        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({
                success:false,
                statusCode:401,
                messsage:"Access denied. Please login.",
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select("-password");

        if(!user){
            return res.status(404).json({
                success:false,
                statusCode:404,
                message:"User not found",
            })
        }
        req.user = user;
        next();
    } catch (error){
        if ( error.name === "TokenExpiredError" ) {
            return res
                .status(401)
                .json({
                    success: false,
                    statusCode: 401,
                    message:"Token expired. Please login again."
                });
        }
        if ( error.name === "JsonWebTokenError"
        ) {
            return res
                .status(401)
                .json({
                    success: false,
                    statusCode: 401,
                    message:"Invalid token"
                });
        }
        return res
            .status(500)
            .json({
                success: false,
                statusCode: 500,
                message:"Internal server error"
            });
    }
}
module.exports = protect;