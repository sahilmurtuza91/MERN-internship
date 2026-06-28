const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const {findOrCreateSocialUser} = require("../../services/authService"); 


passport.use(new GoogleStrategy({
    clientID: process.env.google_CLINT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // callbackURL: "/auth/google/callback",
    callbackURL:process.env.GOOGLE_CALLBACK_URL,
  },
  async (accessToken, refreshToken, profile, cb) =>{

    try{
        const user = await findOrCreateSocialUser(profile, "google");
        cb(null, user);
    } catch(error){
        cb(error, null);
    }
    
  }
));