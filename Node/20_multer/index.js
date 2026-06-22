require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connnection");
const uploadrouter = require("./routes/uploadRoutes")


const app = express();

connectDB();
const PORT = process.env.PORT || 5000;


app.use(express.json());

app.use("/api/file",uploadrouter)
app.listen(PORT, ()=>{
    console.log(`server started at port: ${PORT}`);
});