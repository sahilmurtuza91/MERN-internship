require("dotenv").config();
const express = require("express");
const { connectionMongoDB } = require("./config/connnection");
const urlRoute = require("./routes/url");
const ejs = require("ejs");
const path = require("path");
const staticUrl = require("./routes/staticRouter");

const app = express();
const PORT = process.env.PORT;

connectionMongoDB(process.env.mongoDB_URL)

app.set("view engine", "ejs");
app.set("views", path.resolve("./views")); 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/ShortUrl", urlRoute);
app.use("/url", staticUrl);
app.listen(PORT, () => {
    console.log(`server is started at port : ${PORT}`);
})