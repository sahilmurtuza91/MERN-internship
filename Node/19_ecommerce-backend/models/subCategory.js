const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,
    },
    isActive:{
        type:Boolean,
        default:true,
    },
},
{timestamps:true,}
);

subCategorySchema.index({
    categoryId:1
});
subCategorySchema.index({
    name:1
});

const SubCategory = mongoose.model("SubCategory", subCategorySchema);
module.exports = SubCategory;