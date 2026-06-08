const mongoose = require("mongoose");

async function connectionMongoDB(url) {
    try {
        await mongoose.connect(url);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("MongoDB Connection Error: ", error);
        process.exit(1);
    }
}

module.exports = {
    connectionMongoDB,
}