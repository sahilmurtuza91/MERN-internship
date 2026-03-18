// let a = 3.14; // A number with decimal value
// let b = 3; // A number without decimal value
// console.log(a);
// console.log(b);

const { type } = require("node:os");

let a ="10";
let b ="20";
let c = a + b;
console.log(c)

let x = "100";
let y = "10";
// for this string we can perform the correct operation of division, multiplication and subtraction but can't perform the correct addition this will perform the concatation instead of addition

console.log(`Division ("100"/"10"):- ${x/y}`);

console.log(`Multiplication ("100" * "10"):- ${x*y}`);

console.log(`Subtraction ("100" - "10"):- ${x-y}`)

// But at the time of addition it nit add them but it concataniate them
console.log(`addition ("100" + "10"):- ${x+y}`)

// by dividin the number with the non number string then it give the output NaN(not a number)

console.log(100/"Sahil") // NaN

// if you are using the NaN in a mathematical Operation then the resukt will also be NaN

let e = NaN;
let f = 5;
console.log("\nHere we are performing the mathematical operation with NaN it gives the result as NaN")
console.log(`Addition ${e+f}`);
console.log(`subtraction ${e-f}`);
console.log(`division ${3/f}`);

let myNumber = 2;
// Execute until Infinity
while(myNumber != Infinity){
    myNumber = myNumber * myNumber;
    console.log(myNumber)
}

// Division by zero also generates the Infinity

let p =12;
let q = -30;
console.log(p/0);
console.log(q/0);

// Infinity is a number
console.log(typeof Infinity);

// Normaly javsacript display numbers as base 10 decimals.
// But can can use the toString() method to output numbers from base 2 to base 36.

let myNumber1 = 32;
console.log("\nConvert the number from base 10 to base 32 by using the toString() method")
console.log()
console.log(myNumber1.toString(32)) // base 32
console.log(myNumber1.toString(16)) // base 16
console.log(myNumber1.toString(12)) // base 12
console.log(myNumber1.toString(10)) // base 10
console.log(myNumber1.toString(8)) // base 8
console.log(myNumber1.toString(2)) // base 2

console.log(typeof NaN); // --> number
console.log(typeof null) // --> object

// Normaly js is a primitive value but we can make the object by using new keyword

let s = 123;
console.log(typeof s);

let m = new Number(123);
console.log(typeof m);

// both number showa == true but s===m show false

console.log(s==m);
console.log(s===m);