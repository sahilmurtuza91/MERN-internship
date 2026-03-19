//A JavaScript Set is a collection of unique values.
// The values can be of any type, primitive values or objects.

// creating empty set
const mySet = new Set();
console.log(mySet) // Set(0){}

// Creating a Set with initial values
const number = new Set([1,2,3,4,5]);
console.log(number); // Set(5) { 1, 2, 3, 4, 5 }

const numDuplicate = new Set([1,2,3,2,,3,2,3]);
console.log(numDuplicate); // Set(4) { 1, 2, 3, undefined }


const letter = new Set();
// add methos;
letter.add("2");
letter.add(4);
letter.add("sahil");
console.log(letter);

// we can list all Set elements (values) with a for..of loop:
for(let i of letter){
    console.log(i);
}
let text="";
for(let i of letter){
    text += i+" ";
}
console.log(text);

console.log(typeof letter) //object

console.log(letter instanceof Set) // true