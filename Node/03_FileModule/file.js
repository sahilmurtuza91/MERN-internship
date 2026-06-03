const fs = require("fs");

const os = require("os");
console.log(os.cpus().length); // gives the lenght of the cpu

// Write operation on file 

// synchronous ---> execute one after another (Blocking)
// fs.writeFileSync("./test.txt", "hey this is test file");

// console.log("file is creayed successfully");


// Asynchronous ----> execute in any order (Non blocking)  is require a callback function
// fs.writeFile("./test.txt", "Hey this is test file created ",(err)=>{
//     console.log("Error Occured: ", err);
// });
// console.log("File is created successfully");


// Read operation on file 

// Synchronous file read --> (Blocking)
// const fileData = fs.readFileSync("./test.txt", "utf-8")
// console.log("File data is : ", fileData);
// console.log("File data is read successfully");


// Asynchronous File read --> (Non Blocking)
// fs.readFile("./test.txt", "utf-8", (err, fileData)=>{
//     if(err){
//         console.log("Error is : ", err);
//     } else{
//         console.log("File data is :", fileData);
//     }
// })

// console.log('File data is read successfully');



// Coppy file

// fs.copyFileSync("./test.txt", "./Copyfile.txt");

// delet File
// fs.unlink("./copyfile.txt", (err)=>{
//     if(err){
//         console.log("Error is : ", err)
//     }
// });


// append file 

// fs.appendFileSync("./test.txt", "\nthis is the appended document in new line");
