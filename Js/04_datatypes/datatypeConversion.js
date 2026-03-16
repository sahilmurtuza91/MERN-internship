let score = "33";
console.log(score)
console.log(typeof score)
let valueNumber = Number(score); // this will converts the number
console.log(typeof valueNumber); // this gives --> number
console.log(valueNumber); // this gives --> 33
console.log()


let newScore = "33abc";
console.log(newScore);
console.log(typeof newScore);
let newValueNumber = Number(newScore);
console.log(typeof newValueNumber); // gives--> Number
console.log(newValueNumber) // thi gives --> NaN
console.log()


let score2 = null;
console.log(score2);
console.log(typeof score2); // gives --> object
let valueNumber2 = Number(score2);
console.log(typeof valueNumber2); // gives--> Number
console.log(valueNumber2) // gives--> 0
console.log();


let score3 = undefined;
console.log(score3);
console.log(typeof score3);
let valueNumber3 = Number(score3);
console.log(typeof valueNumber3); //gives--> Number
console.log(valueNumber3) // gives--> NaN(not a number)
console.log()


let score4 = true;
console.log(score4);
console.log(typeof score4);
let valueNUmber4 = Number(score4);
console.log(typeof valueNUmber4); // gives--> Number
console.log(valueNUmber4) // gives --> 1
console.log()

// convert to Boolean
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)
console.log()


let myname= "sahil";
let myNmaeBoolean = Boolean(myname);
console.log(typeof myNmaeBoolean);
console.log(myNmaeBoolean)
console.log()

let yourname = "";
let yournameBoolean = Boolean(yourname);
console.log(typeof yournameBoolean);
console.log(yournameBoolean);
console.log()

// Convert to string

let myNumber = 33;
let myString = String(myNumber)
console.log(typeof myString);
console.log(myString);
console.log()

