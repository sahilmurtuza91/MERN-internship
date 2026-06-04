const mongoose = require("mongoose");

// create the schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
    }
}, {timestamps:true})


// create modle and the name is User
const User = mongoose.model("User", userSchema);
module.exports = User;