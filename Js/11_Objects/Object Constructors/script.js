/*
Sometimes we need to create many objects of the same type.

To create an object type we use an object constructor function.

--An object constructor is a function used to create multiple objects with the same structure.
*/

function person(name, age){ 
    this.name = name;
    this.age = age;
};
const p1 = new person("sahil", 21);
const p2 = new person("Jhon", 50);
console.log(p1);
console.log(p2);

/*
OBJECT CONSTRUCTOR IN JAVASCRIPT

 A constructor is just a NORMAL FUNCTION
Its behavior depends on HOW you call it

1. Normal Function Call 

function Person(name, age) {
this.name = name;
this.age = age;
}
Person("Sahil", 23);

2. Constructor Function Call 
function Person(name, age) {
this.name = name;
this.age = age;
}
const p1 = new Person("Sahil", 23);

3. What 'new' does internally:
new Person("Sahil", 23) →
1. Create empty object {}
2. Set this = {}
3. Add properties (this.name, this.age)
4. Return the object

Constructor function name should start with CAPITAL letter
function Person() {}
*/

function Person2(fanme, lname, age){
    this.fanme=fanme;
    this.lname=lname;
    this.age=age;
    this.fullName = function(){
        return this.fanme+" "+this.lname;
    };
}
const s1 = new Person2("sahil","Murtuza",21);
const s2 = new Person2("Md","Abdulah",22);

console.log(s1.fullName());

// Adding new methods to the existing object

s1.chnagName = function(name){
    this.fanme = name;
};
s1.chnagName("khalid");
console.log(s1.fullName())