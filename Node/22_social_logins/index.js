require("dotenv").config()
const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/connection");

const passport = require("passport");
require("./config/passport/index");

const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();


app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());

// app.get("/",(req, res)=>{
//     console.log("KEY:", process.env.TWITTER_CONSUMER_KEY);
// console.log("SECRET:", process.env.TWITTER_CONSUMER_SECRET);
// console.log("CALLBACK:", process.env.TWITTER_CALLBACK_URL);
//     res.json({
//         message:"Server start running, Now you can implement social login"
//     })
// })

app.use("/auth",authRoutes);

app.listen(PORT, ()=>{
    console.log(`server start runnig on port: ${PORT}`);
})