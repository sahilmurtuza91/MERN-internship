const Order = require("../models/order");
const Product = require("../models/product");
const User = require("../models/user");
const createOrder = async (req, res) => {
    try {
        const { userId, products } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "user not found",
            })
        }
        let totalAmount = 0;
        let totalItems = 0;
        const orderProducts = [];
        const orderedProductNames = [];

        for (const item of products) {
            const product = await Product.findById(item.productId);

            if (!product) {
                return res.status(404).json({
                    success: false,
                    statusCode: 404,
                    messsage: "product not found",
                });
            }

            if (product.stock < item.quantity) {
                return res.status(400).json({
                    success: false,
                    statusCode: 400,
                    message: `${product.name} is out od stock`,
                })
            }

            orderedProductNames.push(product.name);
            totalItems += item.quantity;
            totalAmount += product.price * item.quantity;

            orderProducts.push({
                productId: product._id,
                quantity: item.quantity,
                priceAtPurchase: product.price,
            });

            product.stock -= item.quantity;
            await product.save();
        }

        const order = await Order.create({
            userId,
            products: orderProducts,
            totalAmount,
            status: "completed",
        });


        return res.status(201).json({
            success: true,
            statusCode: 201,
            message: "order placed Successfully",
            data: {
                items: orderedProductNames,
                totalItems,
                totalAmount,
            },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: `failed to placed Error: ${error.message}`,
        });
    }
}


const bulkCreateOrders = async (req, res) => {
    try {
        const ordersInput = req.body;

        if (!Array.isArray(ordersInput)) {
            return res.status(400).json({
                success: false,
                message: "Body must be an array of orders",
            });
        }

        const createdOrders = [];

        for (const orderData of ordersInput) {
            const { userId, products } = orderData;

            const user = await User.findById(userId);
            if (!user) continue;

            let totalAmount = 0;
            let totalItems = 0;

            const orderProducts = [];
            const orderedProductNames = [];

            for (const item of products) {
                const product = await Product.findById(item.productId);

                if (!product) continue;

                // FIX: product.stock (not Product.stock)
                if (product.stock < item.quantity) continue;

                orderedProductNames.push(product.name);
                totalItems += item.quantity;
                totalAmount += product.price * item.quantity;

                orderProducts.push({
                    productId: product._id,
                    quantity: item.quantity,
                    priceAtPurchase: product.price,
                });

                product.stock -= item.quantity;
                await product.save();
            }

            if (orderProducts.length === 0) continue;

            const order = await Order.create({
                userId,
                products: orderProducts,
                totalAmount,
                status: "completed",
            });

            createdOrders.push({
                orderId: order._id,
                userId,
                items: orderedProductNames,
                totalItems,
                totalAmount,
            });
        }

        return res.status(201).json({
            success: true,
            message: "Bulk orders created successfully",
            data: createdOrders,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().select("userId products totalAmount");

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: `orders fetched successfully & total ${orders.length} orders`,
            data: orders,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: `order can't fetched some error occured ${error.message}`,
        });
    }

}

module.exports = { createOrder, bulkCreateOrders, getOrders };