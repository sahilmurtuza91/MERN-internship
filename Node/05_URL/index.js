const http = require("http");
const fs = require("fs");
const url = require("url");


// This callback runs every time a client makes a request. http.createServer(()=>{})
const myServer = http.createServer((request, response)=>{
    if(request.url === "/favicon.ico") return response.end();
    
    const log = `${Date.now()}: ${request.method} ${request.url} New Request Recived \n`;

    const myUrl = url.parse(request.url, true);
    // console.log(myUrl)
    fs.appendFile("log.text", log, (err, data)=>{
        switch (myUrl.pathname){
            // case "/":
            //     response.end("Home page");
            //     break;

            case "/":
                if(request.method === "GET"){
                    response.end("Home Page");
                }
                break;

            case "/about":
                // response.end("This is sahil murtuza");
                const username = myUrl.query.myname;
                response.end(`Hi, ${username}`);
                break;

            case "/signup":
                if(request.method === "GET"){
                    response.end('This is a signup Form');
                }
                else if( request.method === "POST")[
                    // DB query 
                    response.end("Succes")
                ]
            default: response.end("404 Not Found")
                break;
        }
    })
    // console.log(request);
    // response.end("Hello from server again");

});

myServer.listen(8000, ()=> console.log("Server started!"))