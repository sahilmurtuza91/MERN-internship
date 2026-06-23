const users = require("../data/users")

const objectfun = (req, res) => {
    const sampleUser = users[0];

    const { name, email, salary } = sampleUser;

    const city = sampleUser.address?.city

    const userKeys = Object.keys(sampleUser);

    const userValues = Object.values(sampleUser);

    const extraInfo = { isActive: true, country: "india" };
    const mergeObjet = { ...sampleUser, ...extraInfo };

    return res.status(200).json({
        success: true,
        message: "Object concepts demo",

        data: {
            destructuring: { name, email, salary },
            city,
            keys: userKeys,
            values: userValues,
            mergeObjet
        }
    });

}

module.exports = {
    objectfun
}