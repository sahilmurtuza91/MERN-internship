const User = require("../modles/user");
const bcrypt = require("bcrypt");
const { setUser } = require("../service/auth");

// new user register
async function register(req, res) {
    try {
        const { name, email, password } = req.body;
        console.log(req.body);
        console.log(password);
        console.log(typeof password);
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: "All fields are required",
                data: null,
            });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(409).json({
                success: false,
                statusCode: 409,
                message: "User already exist",
                data: null,
            });
        }
        const hashedPassword = await bcrypt.hash(String(password), 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.status(201).json({
            success: true,
            statusCode: 201,
            message: "User Registered",
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("REGISTER ERROR:", error);
        return res.status(500).json({
            success: false,
            statusCode: 500,
            // message: "server error",
            message: error.message,
            data: null,

        });
    }
}

// login register user
async function login(req, res) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "User not found",
                data: null,
            });
        }
        const match = await bcrypt.compare(String(password), user.password);

        if (!match) {
            return res.status(401).json({
                success: false,
                statusCode: 401,
                message: "Invalid password",
                data: null,
            });
        }

        const token = setUser(user);
        res.cookie("token", token);

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Login successful",
            data: {
                token,
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: "server error",
            data: null,
        });
    }
}

module.exports = { register, login };
