/*
Functions are reusable code blocks designed for particular tasks
Functions are executed when they are called or invoked
Functions are fundamental in all programming languages

why we use function?
reuse code, organised code and make easier to read and maintain
*/

function sayHello() {
    return "Hello World"
}
console.log(sayHello()); // call the function

function multily(a , b){
    return a*b;
}
console.log(multily(2,5));

// Immediately invoked function Expression (IIFE)

(function(){
    console.log("Sahil Murtuza");
}());
(()=>{
    console.log("This is the IIEF of the Arrow function")
})();

// named IIFE
(function fun(){
    console.log("This is the named IIFE")
})();
//==========================================================================================
// Taking multiple user inputs in a function.
// We don't know how many values the user will pass.

// Real-world example:
// In an online shopping app, a user can add multiple items to a cart.
// To handle an unknown number of item prices, we use the rest operator (...),
// which collects all inputs into an array.

function addCartItems(...items){
    // return items; // this retunr in the form of array
    let total = 0;
    for(let price of items){
        total +=price;
    }
    return `Total price items is: ${total}`
}
console.log(addCartItems(2,53,56,24,234,54,64));

const addOnlineItems = (...items) =>{
    return items.reduce((total, item)=>{
        return total+item
    },0)
}
console.log(addOnlineItems(2,53,56,24,234,54,64))