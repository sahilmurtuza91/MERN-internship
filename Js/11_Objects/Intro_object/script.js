// Objects are variables that can store both values and functions.

/*
Values are stored as key:value pairs called properties.

Functions are stored as key:function() pairs called methods.
*/

const student = {
    name: "Sahil",
    roll: "42",
    class: "12th"
};
console.log(student.name)
// here name, roll, class are the properties while "Sahil", "42", and "12th" are the properties value.

// we can also cretae the empty  object and latter addd the properties--->

// empty object created
const person = {};
// Add properties
person.fname = "Sahil";
person.lname = "Murtuza";
person.age = 21;
person.eyeColor = "blue";

console.log(person)  // Gives the whole object properties and its value.


// Create a new JavaScript object using new Object():
const person1 = new Object({
    fname: "Jhon",
    lname: "Doe",
    age: 50,
    eyeColor: "blue"
});

console.log(typeof person1);
console.log(person1)
console.log(person1.age);

// using function inside the object

const person2 = {
    fname: "Sahil",
    lanme: "Muirtuza",
    age: 21,
    fullName: function(){
        return this.fname+" "+this.lanme;
    }
};
console.log(person2) // here call the whole object simuntaneously
console.log(person2.fullName())