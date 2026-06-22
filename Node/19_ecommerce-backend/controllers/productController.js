const Product = require("../models/product");
const Category = require("../models/category");
const Subcategory = require("../models/subCategory");
const Brand = require("../models/brand");


// create product
const createProduct = async (req, res) => {
    try {
        const { name, description, categoryId, subcategoryId, brandId, price, stock, } = req.body;

        // category validate
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "Category not found",
            })
        };

        // subcategoy validate
        const subcategory = await Subcategory.findById(subcategoryId);
        if (!subcategory) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "subcategory not found",
            })
        };

        // brand validate
        const brand = await Brand.findById(brandId);
        if (!brand) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "Brand not found",
            })
        };

        // create product
        const product = await Product.create({
            name,
            description,
            categoryId,
            subcategoryId,
            brandId,
            price,
            stock
        });


        const createdProduct = await Product.findById(product._id)
            .populate("categoryId", "name")
            .populate("subcategoryId", "name")
            .populate("brandId", "name");

        return res.status(201).json({
            success: true,
            statusCode: 201,
            message: "product created successfully",
            data: createdProduct,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message,
        });
    }
};


// get all product
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
            .populate("categoryId", "name")
            .populate("subcategoryId", "name")
            .populate("brandId", "name");


        if (products.length === 0) {
            return res.status(404).json({
                success: true,
                statusCode: 404,
                message: "Product not found",
            })
        }
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: `All product fetched successfully. total products ${products.length}`,
            data: products
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message
        });
    }
};

// get product by id
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
            .populate(
                "categoryId",
                "name"
            )
            .populate(
                "subcategoryId",
                "name"
            )
            .populate(
                "brandId",
                "name"
            );

        if (!product) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "Product not found"
            });
        }

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "product fetch successfully",
            data: product
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message
        });
    }
};


// update product
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                returnDocument: "after",
                runValidators: true,
            }
        )
            .populate(
                "categoryId",
                "name"
            )
            .populate(
                "subcategoryId",
                "name"
            )
            .populate(
                "brandId",
                "name"
            );

        if (!product) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "Product not found"
            });
        }
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "product updated successfully",
            data: product
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message
        });
    }
};

// delete Product

const deteleProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: "false",
                statusCode: 404,
                message: "Product not found",
            });
        }

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Product deleted successfully",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message,
        })
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deteleProduct,
}