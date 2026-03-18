function multiply(a,b){
    return a*b;
}
console.log(multiply(3,4));

//a and b are parameters
// 3 and 4 are arguments

console.log(typeof multiply()) // number(because no argument is passed a=undefined and b = undefined so that undefined + undefined = NaN and the typeof of NaN is Number)
console.log(typeof multiply) // function (because Here we are NOT calling the function, just referring to it)

console.log(typeof multiply(2,3)); // NUmber



// arguments object

/*
-It is a built-in object available inside every regular function.

-It contains all the arguments passed to the function.

-I behaves like an array (but not a real array).

-with arguments, parameters are NOT required
*/

let x = findSum(2,4,56,7,8,9,43,56)

function findSum(){
    let sum =0;
    for(let i=0; i<arguments.length; i++){
        sum +=arguments[i];
    }
    return sum;
}
console.log(x)

function finMax(){
    let max = -Infinity;
    for(let i=0; i<arguments.length; i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    return max;
}
let y = finMax(34,5,24,6,2,3,66,75);
console.log(y)

// Arguments Can Be Variables
let a = 5;
let b = 6;
function multiply1(c,d){
    return c*d;
}
console.log(multiply1(a,b));

// If a function is called with fewer arguments than parameters, the missing values become undefined.

function addMore(a,b,c){
    return a+b+c;
}
console.log(addMore(2,3,4));
console.log(addMore(2,3)); // NaN

// Function Rest Parameter
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array
console.log("Function reset parameter")
function sum(...args){
    let sum = 0;
    for(let i of args){
        sum =+ i;
    }
    return sum;
}
console.log(sum(2,3,4));
console.log(sum(3,4,5,6,7));
console.log(sum(3,4,5,6,7,4,3,4,5,67,45));


// Arguments: Passed by Value vs Reference

/*
A copy of the value is passed to the function.
Changing it inside the function does NOT affect the original variable.

*/
let p = 10;
function chnageValue(a){
    a=20;
}
console.log(chnageValue(p));
console.log(p);

console.log()

// Passed by Reference (Objects) --> applied to ( object{}, array[], function)

// A reference (address) is passed.
// Changing object properties WILL affect the original object.

console.log("Chnaging the object value by passing reference")
let obj = {
    name:"Sahil Murtuza",
    roll:10,
    class:"12th"
}
console.log(obj.roll)
function objectValueChange(o){
    o.roll = 20;
}
objectValueChange(obj);
console.log(obj.roll);



