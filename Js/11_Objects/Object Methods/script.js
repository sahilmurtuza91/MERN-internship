//Methods are actions that can be performed on objects.

//Methods are functions stored as property values.

const person = {
    fname: "Sahil",
    lname: "murtuza",
    id: 5563,
    getId: function(){
        return this.id;
    }
};
console.log(person.getId())

// To call an object method, add parentheses ()

//Without parentheses you get the function itself.

console.log(person.getId) // return the function definition.

// Adding a Method to an Object
person.fullname = function(){
    return this.fname + " " + this.lname;
};
console.log(person);

console.log(person.fullname())

// Adding a JavaScript Method

// toUpperCase()
person.capitalLetterNmae = function(){
    return (this.fname + " " + this.lname).toLowerCase();r
};
console.log(person.capitalLetterNmae())
