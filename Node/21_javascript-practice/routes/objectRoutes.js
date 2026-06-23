const express = require("express");
const router = express.Router();

const { objectfun } = require("../controllers/objectConcept");


router.get("/", objectfun);

module.exports = router;