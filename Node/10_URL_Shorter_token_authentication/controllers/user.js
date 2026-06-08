const User = require("../models/user")
const URL = require("../models/url")
const bcrypt = require("bcrypt")
const { setUser, getUser } = require("../service/auth");



async function handleUserSignUP(req, res) {

    try {
        const { name, email, password } = req.body;

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

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
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
            error: error.message,
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
        const user = await User.findOne({ email });

        if (!user) {
            return res.render("Login", {
                error: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.render("login", {
                error: "Invalid email or password"
            });
        }


        const token = setUser(user); // Generate JWT token
        res.cookie("uid", token); // Send token inside cookie

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