const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res)=>{
    return res.send("Hello from the Home page");
})
app.get("/about", (req, res)=>{
    res.setHeader("Content-Type", "text/html");
    return res.send(`This is About page <br> name: ${req.query.name} <br> id: ${req.query.id}`);
})

app.listen(port, ()=>{
    console.log("app server is Started");
})