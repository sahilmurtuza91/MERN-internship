// The this keyword refers to an object.

/*
this Alone
-When used alone, this refers to the global object.
-In a browser, the global object is the window object.
Note: In strict mode, this is undefined when used alone.
*/

// The this keyword makes it possible to use the same method with different objects.
const person1 ={
    name:"jhon",
    hello: function(){
        return "Hello "+ this.name;
    }
};
const person2 = {
    name: "Anna",
    hello: function(){
        return "Hello "+ this.name;
    }
};
console.log(person1.hello()) // Hello Jhon
console.log(person2.hello()) // Hello Anna

// In a regular function, this also refers to the global object.

function myFunction(){
    return this;
}
console.log(myFunction())


console.log(this)