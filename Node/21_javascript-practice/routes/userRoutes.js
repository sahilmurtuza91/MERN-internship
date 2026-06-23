const express = require("express");
const router = express.Router();

const {
    getUserByEmail,
    sendNotification,
    getuserData,
} = require("../controllers/userController");


router.get("/email/:email", getUserByEmail);


router.get("/notify", sendNotification);


router.get("/data", getuserData);

module.exports = router;