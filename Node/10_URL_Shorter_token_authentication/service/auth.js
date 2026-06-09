const jwt = require("jsonwebtoken");

const secret = process.env.SECRET_KEY;


// Generate JWT token
function setUser(user){
    // Data that will be stored inside token
    const payload = {
        _id: user._id,
        email:user.email,
        role:user.role, // this help for the role based authorization
    };
    
    return jwt.sign(payload, secret, {expiresIn:"7d"}); // Create and return signed JWT
}

// Verify JWT token
function getUser(token){
    if(!token) return null;
    try {
        // Decode and verify token
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
}