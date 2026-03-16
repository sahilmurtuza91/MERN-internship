
// JavaScript Operators



// 1. Arithmetic Operators


let a = 10;
let b = 3;

console.log("Addition:", a + b);       // 13 → adds numbers
console.log("Subtraction:", a - b);    // 7 → subtracts numbers
console.log("Multiplication:", a * b); // 30 → multiplies
console.log("Division:", a / b);       // 3.33 → divides
console.log("Modulus:", a % b);        // 1 → remainder
console.log("Exponent:", a ** b);      // 1000 → power (10^3)



// 2. Increment / Decrement


let x = 5;

console.log("Post Increment:", x++); // prints 5 then increases
console.log("After increment:", x);  // now x = 6

console.log("Pre Increment:", ++x);  // increases first then prints (7)

console.log("Post Decrement:", x--); // prints 7 then decreases
console.log("Pre Decrement:", --x);  // decreases first then prints



// 3. Assignment Operators


let y = 10;

y += 5;  // y = y + 5
console.log("Add assignment:", y);

y -= 3;  // y = y - 3
console.log("Subtract assignment:", y);

y *= 2;  // y = y * 2
console.log("Multiply assignment:", y);

y /= 4;  // y = y / 4
console.log("Divide assignment:", y);

y %= 3;  // y = y % 3
console.log("Modulus assignment:", y);



// 4. Comparison Operators


let num1 = 10;
let num2 = "10";

console.log(num1 == num2);  // true → only checks value
console.log(num1 === num2); // false → checks value + type

console.log(num1 != num2);  // false
console.log(num1 !== num2); // true

console.log(num1 > 5);  // true
console.log(num1 < 5);  // false
console.log(num1 >= 10); // true
console.log(num1 <= 9);  // false



// 5. Logical Operators


let age = 20;
let hasLicense = true;

console.log(age > 18 && hasLicense); // AND → both must be true
console.log(age > 18 || hasLicense); // OR → one must be true
console.log(!hasLicense);            // NOT → reverses boolean



// 6. String Operators


let firstName = "Sahil";
let lastName = "Murtuza";

let fullName = firstName + " " + lastName; // concatenation
console.log(fullName);



// 7. Type Operators


let value = 100;

console.log(typeof value); // tells data type



// 8. Ternary Operator


let marks = 80;

let result = marks >= 50 ? "Pass" : "Fail";
// condition ? true value : false value

console.log(result);



// 9. Nullish Coalescing Operator


let username = null;

let displayName = username ?? "Guest";
// if value is null or undefined → use default

console.log(displayName);



// 10. Optional Chaining


let user = {
    name: "Sahil",
    address: {
        city: "Delhi"
    }
};

console.log(user.address?.city); 




// 11. Bitwise Operators


let p = 5; // 0101
let q = 3; // 0011

console.log(p & q); // AND
console.log(p | q); // OR
console.log(p ^ q); // XOR
console.log(~p);    // NOT
console.log(p << 1); // left shift
console.log(p >> 1); // right shift



// 12. Spread Operator

console.log("sprea operator");
let arr1 = [1,2,3];
let arr2 = [...arr1,4,5];

console.log(arr2); 
// spreads array elements


let arr3 = arr1 //this copies the reference (Both arr3 and arr1 variable point to same array in memory)
arr3.push(10);
console.log(arr3) //this is chnage beacause we use this variable to push
console.log(arr1) // goves--> 1,2,3,10 beacse both referes to the same memory address
console.log()

let arr4 =[...arr1] // creates a real copy (creates a new array.)

arr4.push(100);
console.log(arr4) // gives --> 1,2,3,10,100 bucause we push the value

console.log(arr1) // gives --> 1,2,3,10 beacsue spread opeartor create the new array so that addres of both array is not same


let myarr1= [1,2,3];
let myarr2= [5,6,7];

let merged = [...myarr1,...myarr2];
console.log(merged)