const Order = require("../models/order");
const Product = require("../models/product");


// function to get total revenue of the company (use-> $group, $sum)
const getTotalRevenue = async (req, res) => {
    try {
        const revenue = await Order.aggregate([
            {
                $group: {
                    _id: null, // means all items are put in the same group
                    totalRevenue: { $sum: "$totalAmount" }
                }
            }
        ]);

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "total revenue is computed successfully",
            totalRevenue: revenue[0]?.totalRevenue || 0
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: `faild to calculate total company revenue : error ${error.message}`,
        })
    }
}


// calculate the total orders (use-> $count)

const getTotalOrders = async (req, res) => {
    try {
        const totalOrders = await Order.aggregate([
            {
                $count: "totalOrders"
            }
        ]);
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "total orders fetched successfully",
            totalOrders: totalOrders[0]?.totalOrders || 0
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message
        });
    }
}

// calculate the average amount spent by individual user (use->$group, $avg)

const getAverageOrderValue = async (req, res) => {
    try {
        const average = await Order.aggregate([
            {
                $group: {
                    _id: null,
                    averageOrderValue: {
                        $avg: "$totalAmount"
                    }
                }
            }
        ]);

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "average order value fetched successfully",
            averageOrderValue: average[0]?.averageOrderValue || 0
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message
        });
    }
}

// get top customers (use-> $group, $sum, $lookup, $unwind, $project, $sort, $limit)

const getTopCustomer = async (req, res) => {
    try {
        const topCustomer = await Order.aggregate([
            {
                $group: {
                    _id: "$userId",
                    totalSpent: { $sum: "$totalAmount" },
                    totalOrders: { $sum: 1 },
                    totalProductOrdered: {
                        $sum: {
                            $sum: "$products.quantity"
                        }
                    }
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "_id",
                    as: "userInfo"
                }
            },
            {
                $unwind: "$userInfo" // unwind is used because lookup gives array but we want object
            },
            {
                $project: {
                    _id: 0,
                    name: "$userInfo.name",
                    email: "$userInfo.email",
                    totalSpent: 1,
                    totalOrders: 1,
                    totalProductOrdered: 1
                }
            },
            {
                $sort: {
                    totalSpent: -1 // descending order
                }
            },
            {
                $limit: 5
            }
        ]);

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Top customer are fetched successfullly",
            data: topCustomer,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message
        });

    }
}

// top selling products (use-> $unwind, $group, $sum, $lookup, $project, $sort, $limit)
const getTopSellingProducts = async (req, res) => {
    try {
        const topProduct = await Order.aggregate([
            {
                $unwind: "$products"
            },
            {
                $group: {
                    _id: "$products.productId",
                    totalSold: {
                        $sum: "$products.quantity"
                    }
                }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "_id",
                    foreignField: "_id",
                    as: "productInfo"
                }
            },
            {
                $unwind: "$productInfo"
            },
            {
                $project: {
                    _id: 0,
                    productName: "$productInfo.name",
                    category: "$productInfo.category",
                    totalSold: 1
                }
            },
            {
                $sort: {
                    totalSold: -1
                }
            },
            {
                $limit: 10
            }
        ]);

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Top selling products fetched successfully",
            data: topProduct,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message,
        });
    }
};

// revenue by category
const getRevenueByCategory = async (req, res) => {
    try {
        const revenueByCategory = await Order.aggregate([
            {
                $unwind: "$products"
            },
            {
                $lookup: {
                    from: "products",
                    localField: "products.productId",
                    foreignField: "_id",
                    as: "productInfo"
                }
            },
            {
                $unwind: "$productInfo"
            },
            {
                $group: {
                    _id: "$productInfo.category",
                    totalRevenue: {
                        $sum: {
                            $multiply: [
                                "$products.quantity",
                                "$products.priceAtPurchase"
                            ]
                        }
                    },
                    totalItemsSold: {
                        $sum: "$products.quantity"
                    }
                }
            },
            {
                $sort: {
                    totalRevenue: -1
                }
            },
            {
                $project: {
                    _id: 0,
                    category: "$_id",
                    totalRevenue: 1,
                    totalItemsSold: 1
                }
            },
        ]);

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Revenue by category fetched successfully",
            data: revenueByCategory,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message
        });
    }
};

// get lowStack product (use-> $match, $project, $sort)

const getLowStockProducts = async (req, res) => {
    try {
        const lowStckProduscts = await Product.aggregate([
            {
                $match: {
                    stock: {
                        $lte: 10
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    name: 1,
                    category: 1,
                    stock: 1,
                    brand: 1
                }
            },
            {
                $sort: {
                    stock: 1
                }
            }
        ]);

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Low stock products fetched successfully",
            data: lowStckProduscts,
        });
    } catch (error) {

        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: error.message
        });

    }
}

// add inventoryValue to products  (use-> $addFields, $project)
const addInventoryValue = async (req, res) => {
    try {
        const stockValue = await Product.aggregate([
            {
                $addFields: {
                    inventoryValue: {
                        $multiply: ["$price", "$stock"]
                    }
                }
            },
            {
                $project:{
                    _id:0,
                    name:1,
                    brand:1,
                    category:1,
                    stock:1,
                    inventoryValue:1,
                }
            }
        ]);

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Inventery value is added",
            data: stockValue
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: "inventery field is not  added",
            data: stockValue
        });
    }
}
module.exports = {
    getTotalRevenue,
    getTotalOrders,
    getAverageOrderValue,
    getTopCustomer,
    getTopSellingProducts,
    getRevenueByCategory,
    getLowStockProducts,
    addInventoryValue
}