const express = require("express");
const mongoose = require("mongoose");
const processStudents = require("./contoller/data");


const app = express();
const PORT = 8002;

mongoose.connect("mongodb://localhost:27017/fake_data")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });

app.get("/", (req, res) => {
    console.log("Request received: --> Time: ", new Date().toLocaleTimeString());
    processStudents();
    res.json({
        message: "Processing started"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})