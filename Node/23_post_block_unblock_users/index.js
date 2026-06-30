require("dotenv").config()
const express = require("express");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const { connect } = require("mongoose");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler")

const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");

const PORT = process.env.PORT || 8000

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get("/",(req, res)=>{
    res.json({
        message:"Server is runnig implement some part"
    });
});

app.use("/api/user",userRoutes);

app.use("/api/post",postRoutes);


app.use(notFound);
app.use(errorHandler);


app.listen(PORT, ()=>{
    console.log(`Server is runnig on PORT ${PORT}`);
})



