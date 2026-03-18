// function Expression --> a function that is stored in a variable.

function fun1(a,b){ // Standard Function
    return a+b;
}

const add = function(a,b){ // Function Expression
    return a+b;
};
// After a function expression has been stored in a variable, the variable can be used as a function.

console.log(fun1(1,2));
console.log(add(3,4));

/*
function expression can be:

*/

// Anonymous (no name)

let sub = function (a,b){return a-b};

// named function
const add1 = function add(a,b) {return a+b};

console.log(sub(4,2));
console.log(add1(3,3));

/*
Because a function expression is stored in a variable, it can be used like a value.
This is useful when passing functions to other functions (callbacks).

A function expression can be assigned to a variable, passed as an argument to another function, or returned from a function.
*/

function fun(fn){
    return fn();
}
const fun2 = function(){
    return "Sahil Murtuza";
};
console.log(fun(fun2));

// Hosting--> Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their scope before code execution.


// function decleration --> hosted
// so that we call the function decleration before cdefining the function

console.log(addNumber(4,5)); // hosted because function decleration
function addNumber(a,b){
    return a+b;
}

// Function expressions are not hoisted in the same way as function declarations.
//console.log(myFun(1,2)) // this gives error because of function expression is not hosted
const myFun = function(a,b){
    return a+b;
}