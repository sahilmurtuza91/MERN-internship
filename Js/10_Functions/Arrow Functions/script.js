// Arrow Functions allow a shorter syntax for function expressions.
// in  arrow function we can skip the function keyword, return keyword and the curly brackets.

const multiply = (a,b) => a*b;
console.log(multiply(2,4))

// An arrow function is always written as a function expression

const hello = () => "Sahil Murtuza";
console.log(hello())
// if we not use the curly bracket in the array function then it return automatically don't need to wite return but when we use the curly bracket then we use return keyword to return value

const add = (a,b) =>{
    return a+b; // if we write obly a+b it gives undefined
}
console.log(add(3,4));

//________________
// Arrow function with one parameter

// with paranthesis
const square = (x) => x*x;
console.log(square(4));

// Without paranthesis
const square1 = x => x*x;
console.log(square(4));

// This will return undefined
const myFun1 = (x,y) => {x*y};
console.log(myFun1(2,3));

// This will return undefined
// ]const myFun2 = (x,y) => return x*y// this gives undefined

// This will return the expected result
const myFun3 = (x,y) => {return x*y};

console.log(myFun3(3,4));


// Arrow Functions Are Not Declarations
// hello1(); // this gives error bacuse they can't hosted
const hello1 = () =>"hello";


// Arrow Functions and the this Keyword
// this --> means current object in which the code is currently running

// Normal Function conatin  this

const person = {
    name: "sahil",
    greet: function(){
        return this.name; // this gives sahil
        // console.log(this.name) // this gives sahil and undefined because of no return type.
    }
};
console.log(person.greet())

// problem
const person1 = {
    name: "Sahil",
    greet: function(){
        function inner(){ // here inner is normal function so this lose
            return this.name;
        }
         return inner();
    }
};
console.log(person1.greet())

// Arrow function does not have this it use their outside this and copy from the parent

const person2 = {
    name:"sahil Murtuza",
    greet: function(){
        const inner = ()=>{
            return this.name;
        };
       return inner();
    }
};
console.log(person2.greet())

const personr4 = {
    name:"sahil",
    greet:() =>{
        return this.name;
    }
};
console.log(personr4.greet());