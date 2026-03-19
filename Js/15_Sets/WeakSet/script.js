// A JavaScript WeakSet is a collection of values where the values must be objects.

/*
1. What is a WeakSet?
A WeakSet is similar to a Set, but with some important differences:
Only objects can be stored (no numbers, strings, booleans, etc.).
Does not prevent garbage collection — if there are no other references to an object, it can be automatically removed.
Not iterable — you cannot loop over a WeakSet, no .forEach(), no spreading (...).
No size property — you can’t check how many items are inside.
*/


// create WeakSet
let mySet = new WeakSet();

// Create an objet
let myObj = {fname:"Jhon", lname:"Done"};

// Add the object
mySet.add(myObj);
console.log(mySet);

let answer = mySet.has(myObj); // returm true
console.log(answer) // true

myObj =null // Now myObj in mySet will be garbage collected

console.log(mySet);

const processed = new WeakSet();
function process(obj){
    if(processed.has(obj)){
        console.log("Already Processed");
        return;
    }
    else{
        console.log("Processing ",obj.name);
        processed.add(obj);
    }
}
const user1 = {name: "Allice", age: 28}
const user2 = {name: "Bob", age:55};

process(user1); // processing Alice
process(user1); // already procesed
process(user2); // processing Bob