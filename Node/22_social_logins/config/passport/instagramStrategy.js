const passport = require("passport");
const InstagramStrategy = require("passport-instagram").Strategy;

const {findOrCreateSocialUser} = require("../../services/authService"); 

passport.use(new InstagramStrategy({
    clientID: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/instagram/callback"
  },
  async (accessToken, refreshToken, profile, done) =>{
    try{
        const user = await findOrCreateSocialUser(profile, "instagram");
        cb(null, user);
    } catch(error){
        cb(error, null);
    }
  }
));