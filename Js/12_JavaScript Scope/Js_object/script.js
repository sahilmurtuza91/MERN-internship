/*
Scope determines the accessibility (visibility) of variables.

1. Global scope --> veriable declear globaly --> variable can acces from anywhere
2. Function scope
3. Block scope
*/

// Global Scope
let name = "sahil murtuza";
function show(){
    console.log(name); // accessible here
}
show();
console.log(name);// accessible here also

// Function Scope (Local Scope)

function test(){
    let x = 10;
    console.log(x); // accessible here
}
test();
// console.log(x) // gives error

// Block Scope --> A variable declared inside { } using let or const is block scoped
{
    let a = 5;
    console.log(a); // work
}
// console.log(a); // gives error

{
    const a = 5;
    console.log(a); // work
}
// console.log(a); // gives an error

{
    var b =45;
    console.log(b) // work
}
console.log(b) // worl not not recomeanded.

// Automatically Global -->If you assign a value to a variable that has not been declared, it will become a GLOBAL variable.

fun();
console.log(carName);
function fun(){
    carName = "BMW";
}
console.log(carName);