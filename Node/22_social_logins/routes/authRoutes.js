const express = require("express");

const router = express.Router();

const passport = require("passport");
const { socialLoginSuccess, logout, getProviderStats } = require("../constrollers/authControllers")


// google login
router.get("/google", passport.authenticate("google", {
    scope: [
        "profile",
        "email"
    ]
}));

router.get("/google/callback", passport.authenticate("google",
    {
        session: false
    }
),
    socialLoginSuccess
);

// github login
router.get("/github", passport.authenticate("github",{ scope:["user:email"]}));

router.get("/github/callback", passport.authenticate("github",{session:false}), socialLoginSuccess);

// twitter login

router.get("/twitter", passport.authenticate("twitter",{scope:["tweet.read","users.read"]}))
router.get("/twitter/callback", passport.authenticate("twitter", {session:false,
    failureRedirect:"/login"
}),
    socialLoginSuccess
)

// stats
router.get("/provider-stats", getProviderStats);

// logout
router.post("/logout",logout);

module.exports = router;