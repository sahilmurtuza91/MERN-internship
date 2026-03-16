"use StrictMode";

// alert( 3 + 3) // we are using node.js not browser so this gies error

let name = "sahil"
let age = 21
let isLoggedIn = false

// number => 2 to power 53
// bigint
// boolean => true or false
// object =>collection of key-value pairs of data
// Undefined => A primitive variable with no assigned value
// null => standalone value it is also an object
// symbol => A unique and primitive identifiers


console.log(typeof "Sahil");
console.log(typeof age);
console.log(typeof null);
console.log(typeof undefined)

// object

const person = {firstname:"Sahil", lastname:"Murtuza"};
// console.log(person.firstname)  // We can also print the value by using the key

// Array object
const cars = ["saab", "volvo", "BMW"];

// Date object
const date = new Date("2026-03-16")

// null 
let x = null;

// symbol 
const y = Symbol();

console.log("Print the object")
console.log(person)

console.log("print the Array object")
console.log(cars)

console.log("print the date")
console.log(date)

console.log("print null value")
console.log(x)

console.log("print the undefined value")
console.log(y)

console.log("Print in the form of table")
console.table([person, cars, date, x, y]);


console.log(8==9); // this will gives the false
console.log(8==8); // This will gives the true
console.log(8>9); // give false
console.log(8<9); // gives the true