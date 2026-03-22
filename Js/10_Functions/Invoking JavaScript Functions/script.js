// Calling vs Referencing a Function

function sayHello() {
    return "Hello World"
}
console.log(sayHello) // sayHello refers to the function itself. It returns the function

console.log(sayHello()) //sayHello() refers to the function result. It returns the result

// function can call frim any where

function fun1(){
    return "Sahil Murtuza";
}
function fun2(){
    return fun1()
}
console.log(fun2());

// Immediately Invoked function Expression
(function(){
    console.log("Immediately Invoked function Expression")
})();
((name)=>{
    console.log("This is also a IIFE for the arrow function: ",name)
})("Sahil");

function fun(){
    console.log(this);
    console.log(typeof this);
    console.log("This function is executed")
}
fun()
console.log(this)
console.log(typeof this);