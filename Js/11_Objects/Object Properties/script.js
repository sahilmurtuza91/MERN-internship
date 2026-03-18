/*
for accessing the property value by using the []

Inside [], you must give either:
--A string (in quotes)
*/


const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
};
// console.log(person["age"])
// console.log(person["firstname"])

// // change the value of a property
// person.age = 20;
// console.log(person);

// This is called object destructuring with rest operator.
/*
it do two things:-
1. Takes out firstname from the object
2. Collects all remaining properties into a new object called rest
*/
const{firstname, ...restPerson}=person;
console.log(firstname);

console.log(restPerson)

/*
Internally work:-
1.firstname → gets "John"
2. restPerson → gets everything else
    restPerson = {
    lastname: "Doe",
    age: 20
    }
--
Changing rest will NOT affect original person
*/

restPerson.age = 34;
console.log(person.age)// not affet the originale object --> 50
console.log(restPerson.age)// chnage the age from the reset --> 34

const cars = {
    brand: "BMW",
    color: "black",
    price: 50000
};
const {color,...restCars} = cars;
console.log(restCars)

const perso1 = {
      firstName: "John",
    lastName: "Doe",
    age: 50,
};

// deleting thw properties
delete perso1.lastName;
console.log(perso1.lastName) // this gives the undefined becase the lastName propereties is deleted

console.log(perso1) // here all properties shown else lastName because it is deleted

// in operator to check if a property exists in an object.

console.log("firstName" in perso1); // if found gives --> true else gives -->false

// nested object

const myObj = {
    name: "john",
    age: 30,
    myCars:{
            car1:"Ford",
            car2:"BMW",
            car3:"Fiat"
    }
};
console.log(myObj.myCars.car2)
console.log(myObj)