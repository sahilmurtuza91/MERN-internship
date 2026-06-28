const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trime: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trime: true
    },
    providers: [
        {
            provider: {
                type: String,
                enum: [
                    "google",
                    "github",
                    "facebook",
                    "twitter",
                ]
            },
            providerId: {
                type: String,
                required: true,
            },
        }
    ],

    avatar: {
        type: String,
        default: null,
    },
    lastLoginAt: {
        type: Date
    },
    loginStats: {
        totalLogins: {
            type: Number,
            default: 0,
        },

        googleLogins: {
            type: Number,
            default: 0,
        },

        githubLogins: {
            type: Number,
            default: 0,
        },

        facebookLogins: {
            type: Number,
            default: 0,
        },
        twitterLogins:{
            type:Number,
            default:0
        },
    },
},
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;