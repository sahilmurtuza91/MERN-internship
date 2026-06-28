const User = require("../models/user");

const findOrCreateSocialUser = async (profile, provider) => {
    // console.log(profile)
    const email = profile.emails?.[0]?.value;

    if (!email) {
        throw new Error(
            `${provider} account email not available`
        );
    }

    let user = await User.findOne({
        email
    });

    if (!user) {
        user = await User.create({

            name: profile.displayName,
            email,
            providers: [
                {
                    provider,
                    providerId: profile.id
                }
            ],
            avatar: profile.photos?.[0]?.value || null,
            lastLoginAt: new Date(),

            loginStats: {
                totalLogins: 1,
                googleLogins: provider === "google" ? 1 : 0,
                githubLogins: provider === "github" ? 1 : 0,
                facebookLogins: provider === "facebook" ? 1 : 0,
                twitterLogins: provider === "twitter" ? 1: 0,
            }
        });
        return user;
    } else {
        const providerExists = user.providers.some((item) =>
            item.provider === provider && item.providerId === profile.id
        );

        if (!providerExists) {
            user.providers.push({
                provider,
                providerId: profile.id
            });
        }

        user.lastLoginAt = new Date();
        user.loginStats.totalLogins += 1;

        switch (provider) {
            case "google":
                user.loginStats.googleLogins += 1;
                break;

            case "github":
                user.loginStats.githubLogins += 1;
                break;

            case "facebook":
                user.loginStats.facebookLogins += 1;
                break;
            case "twitter":
                user.loginStats.twitterLogins +=1;
                break;
        }
        await user.save();
    }
    return user;
}

module.exports = {
    findOrCreateSocialUser,
}