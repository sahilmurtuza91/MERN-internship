const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;

const { findOrCreateSocialUser } = require("../../services/authService");


passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: process.env.TWITTER_CALLBACK_URL,
    scope: [
        "tweet.read",
        "users.read",
        "offline.access"
    ]
},
    async (accessToken, refreshToken, profile, cb) => {

        try {
            const user = await findOrCreateSocialUser(profile, "twitter");
            cb(null, user);
        } catch (error) {
            cb(error, null);
        }
    }
));