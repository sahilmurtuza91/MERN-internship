const User = require("../models/user")
const URL = require("../models/url")
const { v4: uuidv4 } = require("uuid");
const { setUser, getUser } = require("../service/auth");



async function handleUserSignUP(req, res) {

    try {
        const { name, email, password } = req.body;

        // console.log("Body data: ", req.body);

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.render("signup", {
                error: "User already exists",
            });
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        return res.redirect("/login");

    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: error.message,
            });
        }

        console.log(error);

        return res.status(500).json({
            message: "Internal server Error",
        });
    }

}

async function handleUserLogin(req, res) {

    try {
        const { email, password } = req.body;
        // console.log("Body data: ", req.body );
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.render("Login", {
                error: "Invalid username or password"
            });
        }

        const sessionId = uuidv4();
        setUser(sessionId, user);
        res.cookie("uid", sessionId);

         return res.redirect("/");
         
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: error.message,
        });
    }

}

module.exports = {
    handleUserSignUP,
    handleUserLogin,
}