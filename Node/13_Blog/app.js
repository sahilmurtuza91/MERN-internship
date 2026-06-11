require("dotenv").config();
const path = require("path");
const express = require('express');
const userRout = require("./routes/user")
const blogRout = require("./routes/blog");
const mongoose = require("mongoose");
const cookiePaser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middleware/authentication")
const Blog = require("./modles/blog");

const app = express();
const PORT =process.env.PORT || 8000;
mongoose.connect(process.env.MONGODB_URL).then(e=>console.log("MongoDB connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false}));
app.use(cookiePaser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")))


app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});




app.get("/", async (req, res)=>{
    const allBlogs = await Blog.find()
        .limit(9)
        .populate("author", "fullName")
        .sort({ createdAt: -1 })
        .lean();
        // console.log(allBlogs);
    res.render("home",{
        user:req.user,
        blogs:allBlogs,
    });
})

app.use("/users", userRout)
app.use("/blog", blogRout);

app.listen(PORT, ()=>{
    console.log(`Server started at port : ${PORT}`);
})