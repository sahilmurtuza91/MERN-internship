//  Number.EPSILON
console.log(Number.EPSILON)


// Number.MAX_VALUE
console.log(Number.MAX_VALUE);

// any number larger then this it become infinity.
/*
These properties can only be accessed as Number.MAX_VALUE.
Using x.MAX_VALUE, where x is a variable or a value, will return undefined:
*/
let a =6;
console.log(a.MAX_VALUE) // --> undefimned

// Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.

let b = Number.MIN_VALUE;
console.log(b);

// Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.
let c = Number.MIN_SAFE_INTEGER;
console.log("Minimuim Safe Interger"+c);

// Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.
let d = Number.MAX_SAFE_INTEGER;
console.log("Maximum Safe Interger"+d)

// Positive Infinity
let e= Number.POSITIVE_INFINITY;
console.log(e);
console.log(1/0);

// negative infinity
let f = Number.NEGATIVE_INFINITY;
console.log(f);
console.log(-1/0)