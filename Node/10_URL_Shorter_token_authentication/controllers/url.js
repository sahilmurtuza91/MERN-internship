const { nanoid } = require('nanoid');
const URL = require("../models/url")

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({
            error: "URL is required",
        })
    }
    const shortID = nanoid(8);
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });
    const urls = await URL.find({ createdBy: req.user._id, });

    return res.status(201).render("home", { id: shortID, urls })

}

async function handleRedisrectURL(req, res) {
    try {
        const shortId = req.params.shortId;
        if (!shortId) {
            return res.status(404).json({
                message: "not found",
            });
        }
        const entry = await URL.findOneAndUpdate({
            shortId
        },
            {
                $push: {
                    visitHistory: { timestamp: Date.now() }
                },

            },
            {
                new: true,
            }
        )
        if (!entry) {
            return res.status(404).json({
                message: "Short URL not found",
            });
        }

        return res.redirect(entry.redirectURL);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

module.exports = {
    handleGenerateNewShortURL,
    handleRedisrectURL
}