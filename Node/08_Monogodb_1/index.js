require("dotenv").config();
const express = require("express");
const {connnectionMongoDB} = require("./config/connnection");
const {logReqRes} = require("./middlewares/index");
const UserRouter = require("./routes/user");


const app = express();
const PORT = process.env.PORT;

// mongoDB connected
connnectionMongoDB(process.env.MONGODB_URI);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

// router
app.use("/api/users", UserRouter)


app.listen(PORT, () => {
    console.log(`Server safely started on port: ${PORT}`);
})