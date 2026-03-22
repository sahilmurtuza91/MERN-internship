/*
A Map is a collection of key-value pairs.

-Each key is unique.
-Values can be any type (numbers, strings, objects, etc.).
-Keys can also be any type, unlike objects where keys are usually strings or symbols.
-Maps remember the order of insertion.
-Think of a Map like a dictionary
*/

// Create an empty Map
const myMap = new Map();

// // Create a Map with initial value

// pass an Array to the new Map() constructor
const userMap = new Map([
    ["name","Alice"], // synatx --> [key, value]
    ["age",23],
    ["isAdmin",true]

]);
console.log(userMap)

// add elements with Map.set()
const fruits = new Map();

// sets value
fruits.set("apples",500);
fruits.set("baana",300);
fruits.set("orange",200);

console.log(fruits)

// Changing Map Values
fruits.set("apples",200);
console.log(fruits)

// The get() method gets the value of a key in a Map:
console.log(fruits.get("apples"));

console.log(typeof fruits) // object
console.log(fruits instanceof Map); // true


/*
Object	                             ||           Map                          
------------------------------------------------------------------------------
Not directly iterable	             ||  Directly iterable
Do not have a size property	         ||  Have a size property
Keys must be Strings (or Symbols)	 ||  Keys can be any datatype
Keys are not well ordered	         ||   Keys are ordered by insertion
Have default keys	                 ||   Do not have default keys

*/