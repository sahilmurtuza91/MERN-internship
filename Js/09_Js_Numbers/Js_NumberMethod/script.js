const { constants } = require("node:buffer");

let a =123;
console.log(a.toString());

console.log((123).toString())

console.log((123).toString(2)) // --> gives in the base 2

console.log((125).toString(16)); // gives in the base 16

// toExponential() --> convert a number into exponential (scientific) notation as a string.
let b =9.456;
console.log(b.toExponential(2));
console.log(b.toExponential(4));
console.log(b.toExponential(6));

// toFixed()  ---> formate the number using Fixed decimal points and return string

let c = 123.456;
console.log(c.toFixed()); // "123"--> no decimal
console.log(c.toFixed(2)); // "123.45" --> take two digit after the decimla place
console.log(c.toFixed(6)) // "123.456000" --> take 6 digit after the decimal point


//toPrecision() --> returns string with the specified number of the digit

let d = 123.345;
console.log(d.toPrecision())  // --> this is defult because we don't give any length so it print whole
console.log(d.toPrecision(2)) // "12"
console.log(d.toPrecision(4)); // "123.3"
console.log(d.toPrecision(6)); // "123.345"
console.log(d.toPrecision(8)); // 123.34500

// valueOf() --> valueOf() just gives you the number itself.
// avaScript usually does this automatically, so you don’t need to call it in normal code.

let e =123;
console.log(e.valueOf()) // 123;
console.log((123).valueOf())

let f = new Number(2234);
console.log(typeof f); // gives the object
console.log(typeof f.valueOf()); // give sthe number


// Numnber() -->convert the javaScript varialbe to number

console.log(Number(true)); // 1
console.log(Number("Sahil")) // NaN

// Number Method is also used to convert the date to nummber

let date = new Date("2026-03-17");
console.log(Number(date))
// When you use Number(date), JavaScript returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (this is called the Unix timestamp).


// parseInt()--> parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

console.log(parseInt("-10")); // 10
console.log(parseInt("-10.33")) //-10
console.log(parseInt("10")); // 10
console.log(parseInt("20.33")) //20
console.log(parseInt("30 40 60")) // 30
console.log(parseInt("34 years")) // 34
console.log(parseInt("years 35")) //NaN

// parseFloat() --> parses a string and returns a number. Spaces are allowed. Only the first number is returned:
console.log("using the parseFloat")
console.log(parseFloat("10")); // 10
console.log(parseFloat("20.233")) // 20.333
console.log(parseFloat("30 40 50")); // 30
console.log(parseFloat("40 years")) // 40
console.log(parseFloat("years 60")) // NaN

// Different methids of the Number
//1. Number.isInteger()
console.log(Number.isInteger(123));
console.log(Number.isInteger(123.45));
console.log(Number.isInteger("123"));
console.log(Number.isInteger("123 years"));
console.log()

// 2. Number.isNaN
console.log(Number.isNaN("123Sahil"));
console.log(Number.isNaN(1123));
console.log(Number.isNaN(123.45));
console.log(Number.isNaN('123'));
console.log()

// Number.isFinite() --> return true if the argment is not infinity and NaN

console.log(Number.isFinite(345));

// Number.isSafeInteger() --> Returns true if the argument is a safe integer
console.log(Number.isSafeInteger(234));
console.log(Number.isSafeInteger(23483648269456283712684986140));
console.log();


// Number.parseFloat() parses a string and returns a number. (static method)
// Spaces are allowed. Only the first number is returned:
console.log("using the Number.parseFloat")
console.log(Number.parseFloat("10")); // 10
console.log(Number.parseFloat("20.233")) // 20.333
console.log(Number.parseFloat("30 40 50")); // 30
console.log(Number.parseFloat("40 years")) // 40
console.log(Number.parseFloat("years 60")) // NaN


// Number.parseInt() parses a string and returns a whole number.
// Spaces are allowed. Only the first number is returned:
console.log("using the Number.parseInt")
console.log(Number.parseInt("10")); // 10
console.log(Number.parseInt("20.233")) // 20.333
console.log(Number.parseInt("30 40 50")); // 30
console.log(Number.parseInt("40 years")) // 40
console.log(Number.parseInt("years 60")) // NaN
