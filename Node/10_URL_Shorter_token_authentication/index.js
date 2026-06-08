require("dotenv").config();

const express = require("express");
const cookieParser = require('cookie-parser');
const path = require("path");

const { connectionMongoDB } = require("./config/connnection");

const urlRoute = require("./routes/url");
const staticUrl = require("./routes/staticRouter");
const UserRoute = require("./routes/user");

const { checkForAuthentication, restricTo } = require("./middlewares/auth")

const app = express();
const PORT = process.env.PORT;

connectionMongoDB(process.env.mongoDB_URL)

app.set("view engine", "ejs");
app.set("views", path.resolve("./views")); 


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);



app.use("/ShortUrl",restricTo(["NORMAL", "ADMIN"]), urlRoute);
app.use("/user", UserRoute);
app.use("/", staticUrl); 



app.listen(PORT, () => {
    console.log(`server is started at port : ${PORT}`);
})