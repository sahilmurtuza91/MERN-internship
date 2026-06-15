const cluster = require("cluster");
const os = require("os");
const express = require("express");

const numberCPUs = os.cpus().length;

if(cluster.isPrimary){
    console.log(`Primary Process: ${process.pid}`);

    for(let i =0; i<numberCPUs; i++){
        cluster.fork();
        // console.log(cluster.fork());
    }
    // console.log(`Cluster server started at ${cluster.worker.process.pid}`);
} else {
    const app = express();
    const PORT = 8000;

    app.get("/", (req, res)=>{
        return res.json({
             message:`Request handled by PID ${process.pid}`,
        });
    });

    app.listen(PORT, ()=>{
        console.log(`Worker ${process.pid} listening on port ${PORT}`);
    })
}