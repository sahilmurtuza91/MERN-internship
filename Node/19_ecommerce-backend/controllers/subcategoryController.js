const mongoose = require("mongoose");
const SubCategory = require("../models/subCategory");
const Category = require("../models/category");

const createSubCategory = async (req, res) => {
    try {
        const { name, categoryId } = req.body;

        const category =
            await Category.findById(
                categoryId
            );

        if (!category) {

            return res.status(404)
                .json({
                    success: false,
                    statusCode: 404,
                    message: "Category not found"
                });

        }

        const existingSubCategory = await SubCategory.findOne({ name });
        if (existingSubCategory) {
            return res.status(409).json({
                success: false,
                statusCode: 409,
                message: "subCategory already exist",
            });
        }

        const subcategory = await SubCategory.create({
            name,
            categoryId
        });
        return res.status(201).json({
            success: true,
            statusCode: 201,
            message: "subCategory created successfully",
            data: {
                name,
                categoryId
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: `Internal Server error : ${error.message}`,
        });
    }
}

const getAllSubCategories = async (req, res) => {
    try {
        const subcategory = await SubCategory.find()
            .select("name categoryId")
            .populate("categoryId", "name");

        if (!subcategory) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "sub-category not founded",
            });
        }

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: `sub-category fetched successfully. total subCategory is ${subcategory.length}`,
            data: subcategory,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: `Internal Server error : ${error.message}`,
        });
    }
}

// fetch subCategory by Id

const getSubcategoryById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Invalid sub-category id",
            });
        }

        const subcategory = await SubCategory.findById(req.params.id)
            .select("name categoryId")
            .populate("categoryId", "name");

        if (!subcategory) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "sub-category not founded",
            });
        }

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Sub category fetched successfully",
            data: subcategory
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: `Internal Server error : ${error.message}`,
        });
    }
}


// update subcategory 
const updateSubcategory = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Invalid sub-category id",
            });
        }

        const subcategory = await SubCategory.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                returnDocument: "after",
                runValidators: true,
            }
        ).select("name categoryId");

        if (!subcategory) {
            return res.status(404).json({
                success: false,
                message: "Subcategory not found"
            })
        }
        return res.status(200).json({
            success: true,
            stausCode: 200,
            message: "subcategory updated successfully",
            data: subcategory
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: `Internal Server error : ${error.message}`,
        });
    }
}

// delete subcategory

const deleteSubcategory = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Invalid sub-category id",
            });
        }

        const subcategory = await SubCategory.findByIdAndDelete(req.params.id);
        if (!subcategory) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "subcategory not found",
            });
        }

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "subcategory Deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: `Internal Server error : ${error.message}`,
        });
    }
}

module.exports = {
    createSubCategory,
    getAllSubCategories,
    getSubcategoryById,
    updateSubcategory,
    deleteSubcategory,
}