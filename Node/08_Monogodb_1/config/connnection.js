const mongoose = require("mongoose");


async function connnectionMongoDB(url){
    try{
        await mongoose.connect(url);
        console.log("MongoDB successfully connected.");
    } catch(error){
        console.log("MongoDB connection error: ", error.message);
        process.exit(1) // Destroy the node process if database connection fails 
    }
}

module.exports = {
    connnectionMongoDB,
}


