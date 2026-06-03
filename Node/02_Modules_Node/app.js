// const Math = require("./math");

// console.log("This is module")

// console.log("Addition of the two number is: ",Math.add(2,3));

// console.log("Subtratction of the two number is: ",Math.sub(5,2));



// another way to imort by using Destructuring

const { add, sub } = require("./math")
console.log("Addition: ", add(3,4));
console.log("Subtraction: ",sub(8,3));
console.log("Value of add is : ",add)