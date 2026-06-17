const mongoose = require("mongoose");

// this function is used to connect the mongoDB.
const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected...");
    } catch(error){
        console.log("MongoDB fail to connect: ", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;