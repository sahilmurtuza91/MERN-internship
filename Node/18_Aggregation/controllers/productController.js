const Product = require("../models/product");

// Function used to create product
const createProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            brand,
            category,
            price,
            stock,
            rating,
        } = req.body;
        // console.log(req.body);
        const product = await Product.create({
            name,
            description,
            brand,
            category,
            price,
            stock,
            rating,
        });
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: "Product Added successfully",
            data: {
                name,
                category,
                price,
                stock
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            statusCode: 500,
            message: `failed to add the product ${error.message}`,
        });
    };
};

const bulkCreateProducts = async (req, res) => {
    try {
        console.log("BODY =>", req.body);
        console.log("IS ARRAY =>", Array.isArray(req.body));
        const products = await Product.insertMany(req.body);

        return res.status(201).json({
            success: true,
            statusCode: 201,
            message: `${products.length} products Added successfully`,
            data: products,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message,
        });
    }
}

// function to get the product

const getProduct = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: `Product fetch successfully & product length is ${products.length}`,
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            statusCode: 500,
            message: `failed to fetch product: error: ${error.message}`,
        });
    }
};

module.exports = {
    createProduct,
    bulkCreateProducts,
    getProduct,
};
