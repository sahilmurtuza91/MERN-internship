const mongoose = require("mongoose");

const categorySchena = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true,
        trim:true,
    },
    description:{
        type:String,
        default:"",
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    
},
{timestamps:true,}
);

const Category = mongoose.model("Category", categorySchena);
module.exports = Category;