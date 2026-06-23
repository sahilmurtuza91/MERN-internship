const express = require("express");
const dashboardRoutes = require("./routes/dashboardRoutes");
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes");
const objectRoutes = require("./routes/objectRoutes");

const app = express();
const PORT = 8000

app.use(express.json());

app.use("/api/dashboard",dashboardRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/objects", objectRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`)
})