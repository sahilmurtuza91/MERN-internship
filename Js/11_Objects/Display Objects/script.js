// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let text = person;
console.log(text);
let text1 = "";
for(let x in person){
    text1 += person[x] +" ";
}
console.log(text1)

// Object.values() creates an array from the property values
const person1 = {
  name: "John",
  age: 30,
  city: "New York"
};
const myArray = Object.values(person1);
console.log(myArray) // this gives the object properties in the form of array

console.log(myArray.toString()) // this convert the arry to string

// JSON.stringify() --> convert the JavaScript to tring

let myString = JSON.stringify(person);
console.log(myString);