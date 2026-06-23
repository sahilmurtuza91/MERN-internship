const express = require("express");
const router = express.Router();

const { removeProduct } = require("../controllers/productController");


router.delete("/:id", removeProduct);

module.exports = router;