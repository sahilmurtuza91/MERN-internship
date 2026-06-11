const jwt = require("jsonwebtoken");

const sectret = "$uperMan@123";

function createTokenForUser(user){
    const payload = {
        _id:user._id,
        email:user.email,
        fullName:user.fullName,
        profileImageURL:user.profileImageURL,
        role:user.role, 
    };
    const token = jwt.sign(payload, sectret);
    return token;
}

function validateToken(token){
    const payload = jwt.verify(token, sectret);
    return payload;
}

module.exports= {
    createTokenForUser,
    validateToken,
}