const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            default: "",
        },

        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },

        subcategoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubCategory",
            required: true,
        },

        brandId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Brand",
            required: true,
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        stock: {
            type: Number,
            default: 0,
            min: 0,
        },

        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);
productSchema.index({
    name: 1
});
productSchema.index({
    categoryId: 1,
});
productSchema.index({
    brandId: 1,
});
productSchema.index({
    categoryId: 1,
    brandId: 1,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
