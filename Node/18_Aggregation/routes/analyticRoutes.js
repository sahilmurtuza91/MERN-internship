const express = require("express");

const router = express.Router();

const { 
    getTotalRevenue, 
    getTotalOrders, 
    getAverageOrderValue, 
    getTopCustomer, 
    getTopSellingProducts, 
    getRevenueByCategory, 
    getLowStockProducts,
    addInventoryValue,
} = require("../controllers/analyticsController")

router.get("/revenue", getTotalRevenue);
router.get("/total-orders", getTotalOrders);
router.get("/average-order-value", getAverageOrderValue);
router.get("/top-customers", getTopCustomer);
router.get("/top-selling-products", getTopSellingProducts);
router.get("/revenue-by-category", getRevenueByCategory);
router.get("/low-stock-product",getLowStockProducts);
router.get("/add-inventory-value",addInventoryValue)

module.exports = router;