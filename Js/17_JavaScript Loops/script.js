// for...in Loop
// The for...in loop iterates over the enumerable properties of an object.

const user = { name: "Alice", age: 25, role: "admin" };
for(let i in user){ // It is typically used for iterating over object keys.
    console.log(i, ":", user[i])
}

const arr = [ "x", "y", "z"];
for(let i in arr){
    console.log("index ",i); // gives the index
}
for(let i of arr){
    console.log("value ",i) // gives the value
}