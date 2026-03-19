// A JavaScript WeakMap is a collection of key/value pairs where the keys must be objects.

// create a weakMap
let myMap = new WeakMap();

// create an object
let myObj = {
    fname: "Sahil",
    lname: "Murtuza",
    age: 21
};
myMap.set(myObj, "Player");

let type = myMap.get(myObj); // gets the value
console.log(type);