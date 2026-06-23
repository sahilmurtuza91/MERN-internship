const users = require("../data/users");
const orders = require("../data/orders");
const { DatabaseSync } = require("node:sqlite");
const { get } = require("node:http");

const getDashboard = (req, res)=>{

    // filter
    const verifiedUsers = users.filter((user)=>{
        return user.isVerified;
    });

    // some
    const hasAdmin = users.some((user)=>{
        return user.role === "admin";
    });
    
    // every
    const allverified = users.every((user)=>{
        return user.isVerified;
    })

    // reduce

    const totalRevenue = orders.reduce((accu, order)=>{
        return accu + order.amount;
    },0);


    // map
    const publicUser = users.map((user)=>{
        return {
            id:user._id,
            name:user.name,
            email:user.email,
        };
    });


    res.status(200).json({
        success:true,
        statusCode:200,
        data:{
            totalUser: users.length,
            verifiedUsers:verifiedUsers.length,
            hasAdmin,
            allverified:allverified,
            totalRevenue,
            users:publicUser,
        }
    });
}

module.exports = {
    getDashboard,
}