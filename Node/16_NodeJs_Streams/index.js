const express = require("express");
const fs = require("fs");
const statusMonitor = require('express-status-monitor')();
const zlib = require("zlib");
const app = express();
const PORT = 8000;

app.use(statusMonitor);
fs.createReadStream("./sample.txt").pipe(zlib.createGzip().pipe(fs.createWriteStream("./sample.zip")));
// creating the zip file


app.get("/", (req, res)=>{
    // fs.readFile("./sample.text", (err, data)=>{
    //     res.end(data);
    // });

    // using the streams
    const stream = fs.createReadStream("./sample.txt", "utf-8");
    stream.on("data", (chunk)=> res.write(chunk));
    stream.on("end", ()=>res.end())
});

app.listen(PORT, ()=>{
    console.log(`Server started at PORT: ${PORT}`);
})