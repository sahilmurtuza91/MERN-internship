x =5;
console.log(x)
var x;

/*
Hoisting with let and const

JavaScript knows about the variable at the top of the block (e.g., inside { }).

But it is NOT initialized
Unlike var, let and const do not get a default value.
You cannot use them before the declaration.

console.log(name); //  ReferenceError
let name = "Sahil";

console.log(age);  //  ReferenceError
const age = 20;
*/


// carName = "BMW";
// console.log(carName); // this will give the reference error
// let carName;

// carName1 = "Volvo";
// console.log(carName);
// const carName1; // this gives the error that const decleration mut be initalized


// JavaScript Initializations are Not Hoisted