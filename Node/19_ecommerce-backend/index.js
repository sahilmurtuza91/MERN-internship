require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connnection");


const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const subcategoryRoutes = require("./routes/subcategoryRoutes");
const brandRoutes = require("./routes/brandRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
connectDB();
const PORT = process.env.PORT || 5000;

app.use(express.json());


app.use("/api/users",userRoutes);
app.use("/api/category",categoryRoutes);
app.use("/api/subcategory",subcategoryRoutes);
app.use("/api/brands",brandRoutes);
app.use("/api/products",productRoutes);

app.listen(PORT, ()=>{
    console.log(`server started at port: ${PORT}`);
});