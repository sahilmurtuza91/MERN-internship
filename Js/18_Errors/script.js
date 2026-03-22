/*
The try statement allows you to define a block of code to be tested for errors while it is being executed.

The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

The JavaScript statements try and catch come in pairs:
*/


/*
a) Reference Error--->(This happens when you try to use a variable that doesn’t exist yet and also get this if you try to use a variable before defining it.)
*/


let  x= 5;
try{
    x = y+1;  // y does not exist
}
catch(err1){
    console.log(err1.name); // refereneceError
}

// b) Type Error--->(This happens when you do something with a value that isn’t allowed for its type.)

let num = 5;
try{
    num.toUpperCase(); // number cannot use to upperCase
}catch(err){
    console.log(err.name); // type error
}

let anna = 5;
try {
  anna(); // can't call a number like a function
} catch(err) {
  console.log(err.name); // TypeError
}

// c) Range Error---> (This happens when a number or array is out of allowed range)

try{
    new Array(-1); // array cannot have negative size
}
catch(err){
    console.log(err.name); // RangeError
}

// d) URI Error--->(This happens when you use illegal characters in a URL/URI.)
try{
    decodeURI("%%%%"); // incorect formate
}
catch(err){
    console.log(err.name); // UTIError
}

// e) Syntax Error--->(This happens when your code breaks JavaScript grammar.)
// try{
//     let fname= "sagil;
// }caches