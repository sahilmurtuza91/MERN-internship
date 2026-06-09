const jwt = require("jsonwebtoken");
const User = require("../modles/user");
const secret = process.env.SECRET_KEY;

function setUser(user){
    const payload = {
        _id:user._id,
        email:user.email,
        role:user.role,
    }
    return jwt.sign(payload, secret, {expiresIn:"7d"});
}

function getUser(token){
    try{
        return jwt.verify(token, secret);
    } catch(error){
        return null;
    }
}


module.exports = { setUser, getUser };