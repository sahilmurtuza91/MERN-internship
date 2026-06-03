// const http = require("http");
// const fs = require("fs");


// // This callback runs every time a client makes a request. http.createServer(()=>{})
// const myServer = http.createServer((request, response)=>{
//     const log = `${Date.now()}: ${request.url} New Request Recived \n`
//     fs.appendFile("log.text", log, (err, data)=>{
//         switch (request.url){
//             case "/":
//                 response.end("Home page");
//                 break;
//             case "/about":
//                 response.end("This is sahil murtuza");
//                 break;
//             default: response.end("404 Error")
//                 break;
//         }
//     })
//     // console.log(request);
//     // response.end("Hello from server again");

// });

// myServer.listen(8000, ()=> console.log("Server started!"))



const http = require("http");

const server = http.createServer((req, res)=>{
    const user = {
        id:"1",
        name:"Sahil",
        DOB:"31-05-2005",
    };

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(user));
});
server.listen(8000, ()=> console.log("Server Started"));