/*  Variables are the container for data
variables are assing in4 forms 1. using let, 2. const, 3.var  (Not Recommended), 4.Automatically (Not Recommended)
*/

// Always use const if the value should not be changed
// Always use const if the type should not be changed (Arrays and Objects)
const acountId = 12345

// acountId = 12568  // This is not possible
let acountEmail = "sahil@example.com"
var acountPassword = "87546" //  (Not Recommended)
acountCity = "Chandigarh" //  (Not Recommended)
let acountState;
/*
 After the declaration, the variable has no value (technically it is undefined).
 To assign a value to the variable, use the equal sign:
 accountState = "Rajstan"
 */

// acountId = 45687 // not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

acountEmail = "sahilmurtuza@gmail.com"
acountPassword = "345728"
acountCity = "jaipur"

console.log(acountId)

console.table([acountId, acountEmail, acountPassword, acountCity, acountState])

/*
Understanding var vs let
*/

/*
--------------------------------
VAR Example (Function Scope)
--------------------------------
1. var does NOT respect block scope. but it is Global Scope
Even if declared inside {} it is accessible outside this {}.
*/

if (true) {
    var x = 20
}

console.log("var x:", x) // accessible outside block


/* 
2. VAR Re-declaration Problem

var allows redeclaration which can cause bugs.
*/

var y = 10

if (true) {
    var y = 23
}

console.log("var y:", y) // value becomes 23


/*
--------------------------------
 LET Example (Block Scope)
--------------------------------
let respects block scope.
Variable only exists inside {} block.

it can't be redecleare but it can be reassign
*/

if (true) {
    let age = 28
}

// console.log(age) // ❌ Error: age is not defined


/*
1. LET Cannot be Redeclared

let prevents accidental redeclaration.
*/

let score = 50

if (true) {
    let score = 90 // different variable inside block
    console.log("inner score:", score)
}

console.log("outer score:", score)

/*
------------------------------
Const
-----------------
*/

const pi = 10;
// pi =3.14; // this will also gives an error
// pi = pi +10; //this will also gives an error

/*


var
- Function scoped
- Can be redeclared
- Accessible outside block
- Can create unexpected bugs

let
- Block scoped
- Cannot be redeclared in same scope
- Safer and predictable
- Used in modern JavaScript

const
- Block scoped
- Cannot be reassigned
- Used for constant values

Best Practice
Use const by default
Use let when value needs to change
Avoid var
*/


// Finction Scope

function myFunction() {
    var x = 1;
    let y = 2;
    const z = 3
}
//x can NOT be used here
//y can NOT be used here
//z can NOT be used here


/*
|Keyword | Scope | Redeclare | Reassign |
|--------|-------|-----------|----------|
| var    | No    | Yes       | Yes      |
| let    | Yes   | No        | Yes      |
| const  | Yes   | No        | No       |
 */

