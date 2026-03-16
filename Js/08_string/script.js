let name = "Sahil Murtuza"

// String is a premitive but we can make the object of the string by using the same new 
// Syntx
// variable = new String(literals);
console.log("\n Here we cteted the string object by using the new String()")
let objString = new String("Sahil");
console.log(objString);
console.log(typeof objString)

// When using the equal to operateior == for comparing the string and the new String() then it is equal but when we use the === then it is not equal

let x = "sahil";
let y = new String("sahil")
console.log(x==y); // true
console.log(x===y) // false (beacse one is string and the other us object)

console.log("\n Here we are type checking the object string")
let a= new String("sahil");
let b = new String("sahil");
console.log(a==b);
console.log(a===b);

/*
Comparing two JavaScript objects always returns false.

because objects are compared by reference (memory address), not by their content.
*/