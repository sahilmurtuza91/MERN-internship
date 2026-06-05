const { nanoid } = require('nanoid');
const URL = require("../models/url")

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({
            error: "URl is required",
        })
    }
    const shortID = nanoid(8);
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });
    return res.status(201).render("home", { id: shortID, })

}

async function handleRedisrectURL(req, res) {
    const shortId = req.params.shortId;
    if (!shortId) {
        return res.status(404).json({
            message: "not found",
        })
    }
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: { timestamp: Date.now() }
        }
    })
    if (!entry) {
        return res.status(404).json({
            message: "Short URL not found",
        });
    }

    return res.redirect(entry.redirectURL);
}

module.exports = {
    handleGenerateNewShortURL,
    handleRedisrectURL
}