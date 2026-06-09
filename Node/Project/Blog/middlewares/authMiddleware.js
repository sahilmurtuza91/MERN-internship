const { getUser } = require("../service/auth");
const User = require("../modles/user");

async function checkAuthentication(req, res, next) {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                statusCode: 401,
                message: "Authentication required",
                data: null,
            });
        }

        const decode = getUser(token);

        if (!decode) {
            return res.status(401).json({
                success: false,
                statusCode: 401,
                message: "Invalid token or Expired token",
                data: null,
            });
        }

        const user = await User.findById(decode._id).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "User not found",
                data: null,
            });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: "server error",
            data: null,
        })
    }
}

function roleBaseRestriction(roles = []) {
    return function (req, res, next) {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                statusCode: 401,
                message: "Please login first",
            });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                statusCode: 403,
                message: "Access denied: Unauthorized role",
            });
        }
        return next();
    }
}

module.exports = {
    checkAuthentication,
    roleBaseRestriction,
}