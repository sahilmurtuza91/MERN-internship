const mongoose = require("mongoose");


// function to connect the mongoDB
const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully...");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB