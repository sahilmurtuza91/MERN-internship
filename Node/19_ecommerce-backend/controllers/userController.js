const mongoose = require("mongoose")
const User = require("../models/user");

// register new user
const createUser = async (req, res)=>{
    try{
        const {name, email} = req.body;

        const existingUser = await User.findOne({
            email,
        });

        if(existingUser){
            return res.status(409).json({
                success:false,
                statusCode:409,
                message:"Email already exists",
            });
        } 

        const user = await User.create({
            name,
            email,
        });

        return res.status(201).json({
            success:true,
            statusCode:201,
            message:"user registered Successfully",
            data:{
                name,
                email
            },
        });
    } catch(error){
        return res.status(500).json({
            success:false,
            statusCode:500,
            message:`Internal Server error : ${error.message}`,
        });
    }
};

// fetch all users
const getAllUsers = async (req, res)=>{
    try{
        const users = await User.find().select("name email");
        if(!users){
            return res.status(404).json({
                success:false,
                statusCode:404,
                message:"Users not found"
            });
        }

        return res.status(200).json({
            success:true,
            statusCode:200,
            message:`User fetched successfully total users: ${users.length}`,
            data:users,
        });
    } catch(error){
        return res.status(500).json({
            success:false,
            statusCode:500,
            message:`Internal server error: ${error.message}`,
        })
    }
};


// fetch user by id
const getUserById = async (req, res)=>{
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Invalid user id",
            });
        }
        
        const user = await User.findById(req.params.id).select("name email");

        if(!user){
            return res.status(404).json({
                success:false,
                statusCode:404,
                message:"User not found",
            });
        }

        return res.status(200).json({
            success:true,
            statusCode:200,
            message:"User fetch successfully",
            data:user,
        });
    } catch(error){
        return res.status(500).json({
            success:false,
            statusCode:500,
            error:`internal server error: ${error.message}`,
        });
    }
}

// Update User
const updateUser = async(req, res)=>{
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Invalid user id",
            });
        }

        const user =await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                 returnDocument: "after",
                runValidators:true,
            }
        ).select("name email");

        if(!user){
            return res.status(404).json({
                success:false,
                statusCode:404,
                message:"User not found",
            });
        }

        return res.status(200).json({
            success:true,
            statusCode:200,
            message:"User data Updated successfully",
            data:user,
        });
    } catch(error){
        return res.status(500).json({
            success:false,
            statusCode:500,
            message:`Internal server error : ${error.message}`,
        });
    }
};

// delete user by id 
const deleteUser = async(req, res)=>{
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Invalid user id",
            });
        }

        const user =await User.findByIdAndDelete(req.params.id);

        if(!user){
            return res.status(404).json({
                success:false,
                statusCode404,
                message:"User not found",
            });
        }
        return res.status(200).json({
            success:true,
            statusCode:200,
            message:"User deleted successfully",
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
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
}