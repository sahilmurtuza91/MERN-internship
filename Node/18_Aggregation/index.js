require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connection");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const analyticsRoutes = require("./routes/analyticRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users",userRoutes);
app.use("/api/orders/",orderRoutes);
app.use("/api/analytics", analyticsRoutes);
app.get("/", (req, res)=>{
    return res.json({
        message:"Ecommerece API Running",
    });
});


app.listen(PORT, ()=>{
    console.log(`server started at PORT: ${PORT}`);
})

