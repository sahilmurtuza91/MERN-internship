const express = require("express");

const router = express.Router();

const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deteleProduct,
} = require("../controllers/productController");

router.get("/",getAllProducts);
router.post("/",createProduct);
router.get("/:id",getProductById);
router.put("/:id",updateProduct);
router.delete("/:id",deteleProduct);


module.exports=router;