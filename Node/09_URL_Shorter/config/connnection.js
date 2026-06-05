const mongoose = require("mongoose");

async function connectionMongoDB(url) {
    try {
        await mongoose.connect(url);
        console.log("mongoDB connection is establish");
    } catch (error) {
        console.log("Error occure at mongoDB connection: ", error);
        process.exit(1);
    }
}

module.exports = {
    connectionMongoDB,
}