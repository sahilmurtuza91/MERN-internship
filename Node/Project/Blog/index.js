require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const { connectionMongoDB } = require("./config/connection")

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const { checkAuthentication } = require("./middlewares/authMiddleware")

const app = express();
const PORT = process.env.PORT;
connectionMongoDB(process.env.mongoDB_URL);


app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/posts", checkAuthentication, postRoutes);

app.listen(PORT, ()=>{
    console.log("Server ruunig...");
});