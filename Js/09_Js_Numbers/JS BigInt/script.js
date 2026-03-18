const { type } = require("node:os");

// JavaScript Number is accurate upto 15 digits only
let x = 999999999999999;// 15 digits
let y = 9999999999999999;// 16 digits

console.log("Accurate Number: "+x);
console.log("Inaccurate Number: "+y);

console.log("Max_Safe integer "+Number.MAX_SAFE_INTEGER);

console.log("Minimum safe Integer: "+Number.MIN_SAFE_INTEGERu)


// Create a BigInt by using the number with n suffix

let p =99999999999999999n;
console.log(p)

// another methos to create the BigInt 

let q = BigInt(999999999999999);
console.log(q)

console.log(typeof q) // bigInt
