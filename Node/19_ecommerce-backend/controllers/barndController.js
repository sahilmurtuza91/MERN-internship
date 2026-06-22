const Brand = require("../models/brand");

const createBrand = async (req, res) => {
    try {
        const { name, description } = req.body;

        const existingBrand = await Brand.findOne({ name });

        if (existingBrand) {
            return res.status(409).json({
                success: false,
                statusCode: 409,
                message: "Brand already exists"
            });
        }

        const brand = await Brand.create({ name, description });
        return res.status(201).json({
            success: true,
            statusCode: 201,
            message: "Brand added successfully",
            data: brand
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message
        });
    }
};

const getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        if (brands.length === 0) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "No brand found",
            });
        }
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: `All Brand fetched successfully. total brand ${brands.length}`,
            data: brands,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message
        });
    }
};

// get brand by Id
const getBrandById = async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id);
        if (!brand) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "Brand not found"
            });
        }
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "brand is fetched.",
            data: brand
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message
        });
    }
};


// update Brand
const updateBrand = async (req, res) => {
    try {
        const brand = await Brand.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                returnDocument: "after",
                runValidators: true,
            }
        );
        if (!brand) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "Brand not found"
            });
        }
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Brand update successfully",
            data: brand
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message
        });
    }
};


// deletw brand
const deleteBrand = async (req, res) => {
    try {
        const brand = await Brand.findByIdAndDelete(req.params.id);
        if (!brand) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "Brand not found"
            });
        }
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Brand deleted"
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message
        });
    }
};

module.exports = {
    createBrand,
    getAllBrands,
    getBrandById,
    updateBrand,
    deleteBrand
}