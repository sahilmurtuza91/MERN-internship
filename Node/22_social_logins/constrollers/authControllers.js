const generateToken = require("../utils/generateToken");
const User = require("../models/user");


const socialLoginSuccess = (req, res) => {
    const token = generateToken(req.user._id);
    console.log(req.user);
    res
        .status(200)
        .cookie(
            "token",
            token,
            {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000
            }
        )
        .json({
            success: true,
            statusCode: 200,
            message: "login successful",
            user:{
                id: req.user._id,
                name: req.user.name,
                email: req.user.email,
                avatar: req.user.avatar,
                providers:req.user.providers
                
            }
        });
}

const logout = (req, res) =>{
    res
        .clearCookie("token")
        .status(200)
        .json({
            success:true,
            statuCode:200,
            message:"Logout Successfull"
        });
};

const getProviderStats = async (req, res) => {
    try {
        const googleUsers = await User.countDocuments({ "providers.provider": "google" });
        const githubUsers = await User.countDocuments({ "providers.provider": "github" });
        const facebookUsers = await User.countDocuments({ "providers.provider": "facebook" });
        const twitterUsers = await User.countDocuments({"providers.provider":"twitter"});

        const totalUsers = await User.countDocuments();

        res.status(200).json({
            success: true,
            statusCode: 200,
            data: {
                totalUsers:totalUsers,
                GoogleUsers: googleUsers,
                GitHubUsers: githubUsers,
                facebookUsers: facebookUsers,
                twitterUsers:twitterUsers
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message,
        })
    }
}
module.exports = {
    socialLoginSuccess,
    logout,
    getProviderStats,
}