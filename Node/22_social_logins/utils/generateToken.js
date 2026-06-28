const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const expire = process.env.JWT_EXPIRES_IN;

const generateToken = (userId) => {
    return jwt.sign(
        { id: userId },
        secret,
        {
            expiresIn: expire
        });
};

module.exports = generateToken;