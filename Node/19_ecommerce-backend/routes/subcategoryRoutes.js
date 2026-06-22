const express = require("express");
const {
    createSubCategory,
    getAllSubCategories,
    getSubcategoryById,
    updateSubcategory,
    deleteSubcategory
} = require("../controllers/subcategoryController")

const router = express.Router();

router.post("/",createSubCategory);
router.get("/",getAllSubCategories);
router.get("/:id",getSubcategoryById);
router.put("/:id",updateSubcategory);
router.delete("/:id",deleteSubcategory);

module.exports = router;