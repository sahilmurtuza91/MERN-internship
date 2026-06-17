const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
        index:true,
    },
    price:{
        type:Number,
        required:true,
        min:0,
    },
    stock:{
        type:Number,
        required:true,
        default:0,
        min:0,
    },
    rating:{
        type:Number,
        default:0,
        min:0,
        max:5,
    },
    totalReviews:{
        type:String,
        default:0
    },
    isActive:{
        type:Boolean,
        default:true,
    }
},
{timestamps:true,}
);
productSchema.index({
    name:1
});
const Product = mongoose.model("product", productSchema);
module.exports = Product;