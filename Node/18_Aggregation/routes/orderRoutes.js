const express = require("express");

const router = express.Router();

const { createOrder, bulkCreateOrders, getOrders }  = require("../controllers/orderController");

router.post("/", createOrder);
router.post("/bulk", bulkCreateOrders);
router.get("/", getOrders);

module.exports = router;