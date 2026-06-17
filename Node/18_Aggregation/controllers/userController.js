const User = require("../models/user");

const createUser = async (req, res)=>{
    try{
        const {name, email} = req.body;
        // add one to chreck that the proper input is taken from bosy or not

        const user = await User.create({
            name,
            email,
        });

        return res.status(201).json({
            success:true,
            statusCode:201,
            message:"User Created Successfully",
            data:user
        });
    } catch (error){
        return res.status(500).json({
            success:false,
            statusCode:500,
            message:`faild to create user: ${error.message}`,
        });
    }
};


const bulkCreateUsers = async (req, res) => {
  try {
    const users = await User.insertMany(req.body);

    return res.status(201).json({
      success: true,
      statusCode: 201,
      count: users.length,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: error.message,
    });
  }
};


const getUsers = async (req, res)=>{
    try{
        const users = await User.find();

        return res.status(200).json({
            success:true,
            statusCode:200,
            message:`user fetch successfully & total users: ${users.length}`,
            data:users,
        })
    } catch(error) {
        return res.status(500).json({
            success:false,
            statusCode:500,
            message:`failed to fetch user: ${error.message}`,
        });
    }
};

module.exports = {
    createUser,
    bulkCreateUsers,
    getUsers,
}