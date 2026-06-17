const express = require("express");

const router = express.Router();
const { createProduct,bulkCreateProducts, getProduct } = require("../controllers/productController");

router.post("/", createProduct);
router.post("/bulk", bulkCreateProducts);
router.get("/", getProduct);

module.exports = router;