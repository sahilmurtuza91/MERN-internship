const express = require("express");
const { handleGenerateNewShortURL, handleRedisrectURL } = require('../controllers/url')

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleRedisrectURL);


module.exports = router;