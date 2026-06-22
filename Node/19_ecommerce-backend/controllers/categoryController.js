const mongoose = require("mongoose")
const Category = require("../models/category");

const createCategory = async (req, res) => {
    try {
        const { name, description, } = req.body;
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(409).json({
                success: false,
                statusCode: 409,
                message: "Category already exist",
            });
        }

        const category = await Category.create({
            name,
            description
        });
        return res.status(201).json({
            success: true,
            statusCode: 201,
            message: "Category created successfully",
            data: {
                name,
                description
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: `Internal Server error : ${error.message}`,
        });
    }
};

// get all categories
const getAllCategory = async (req, res) => {
    try {
        const categories = await Category.find().select("name description isActive");

        if (categories.length === 0) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "No categories found",
            });
        }

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: `Categories fetched successfully. Total categories: ${categories.length}`,
            data: categories,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: `Internal server error: ${error.message}`,
        })
    }
}

const getCategoryById = async (req, res)=>{
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Invalid category id",
            });
        }
        
        const category = await Category.findById(req.params.id).select("name description isActive");

        if(!category){
            return res.status(404).json({
                success:false,
                statusCode:404,
                message:"Category not found",
            });
        }

        return res.status(200).json({
            success:true,
            statusCode:200,
            message:"category fetch successfully",
            data:category,
        });
    } catch(error){
        return res.status(500).json({
            success:false,
            statusCode:500,
            error:`internal server error: ${error.message}`,
        });
    }
}

// Update Category
const updateCategory = async(req, res)=>{
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Invalid category id",
            });
        }

        const category =await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                returnDocument: "after",
                runValidators:true,
            }
        ).select("name description isActive");

        if(!category){
            return res.status(404).json({
                success:false,
                statusCode:404,
                message:"category not found",
            });
        }

        return res.status(200).json({
            success:true,
            statusCode:200,
            message:"category Updated successfully",
            data:category,
        });
    } catch(error){
        return res.status(500).json({
            success:false,
            statusCode:500,
            message:`Internal server error : ${error.message}`,
        });
    }
};

// delete Category by id 
const deleteCategory = async(req, res)=>{
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Invalid category id",
            });
        }

        const category =await Category.findByIdAndDelete(req.params.id);

        if(!category){
            return res.status(404).json({
                success:false,
                statusCode:404,
                message:"category not found",
            });
        }
        return res.status(200).json({
            success:true,
            statusCode:200,
            message:"category deleted successfully",
        });
    } catch(error){
        return res.status(500).json({
            success:false,
            statusCode:500,
            message:`Internal server error : ${error.message}`,
        })
    }
};

module.exports = {
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
}