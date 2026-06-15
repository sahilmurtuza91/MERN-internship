const express = require("express")

const app = express();
const PORT = 8000;

app.get("/", (req, res)=>{
    res.json({
        message:`Processing strated at process id ${process.pid}`,
    });
});

app.listen(PORT, ()=>{
    console.log(`server started at port: ${PORT}`);
})