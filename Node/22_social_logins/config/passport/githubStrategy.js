const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

const {findOrCreateSocialUser} = require("../../services/authService")


passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL:process.env.GITHUB_CALLBACK_URL
  },
  async (accessToken, refreshToken, profile, cb)=> {
    try{
        const user = await findOrCreateSocialUser(profile, "github");
        cb(null, user);
    } catch (error){
        cb(error, null)
    }
  }
));