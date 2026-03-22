// Object Destructuring
// Extract values from an object and store them in variables easily

const obj = {
    name: "Sahil",
    age: 21,
    class: "12th"
};
// destruct object 
const {name, age }= obj;
console.log(name)
console.log(age);
// console.log(class);// this gives error

// we can also set another name of the detruct element
const {name:na} = obj;
console.log(na);// here we ue the na insted of name to print the name which is distructed

// rest operator

const myObj = {
    username: "Sahil123",
    website: "W3School"
}
const{username,...rest} = myObj;
console.log(rest);



// Destructuring----> Taking values out of an array/object
// Rest Operator (...)----> Collecting multiple values into an array/object
