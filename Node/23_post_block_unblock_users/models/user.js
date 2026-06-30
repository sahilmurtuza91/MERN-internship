const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    blockedUsers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
},
    { timestamps: true }
)

// this is for saving the password in encrypted form
// userSchema.pre("save", async function (next) {
userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        // return next()
        return;
    }
    this.password = await bcrypt.hash(this.password, 12);
    // next();
})


// this is for comaparing the password at the time of login
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


const User = mongoose.model("User", userSchema);
module.exports = User;