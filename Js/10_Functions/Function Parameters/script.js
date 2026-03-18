// Parameters allow you to pass (send) values to a function.

// Parameters are listed inside the parentheses in the function definition.

function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);
console.log(result)

function fullName(fanme, lname){
    returm `Welcome ${fname} ${lname}`
}
console.log("Sahil", "murtuza");

/*
Parameters vs. Arguments

-Parameters are the names listed in the function definition.
-Arguments are the real values passed to, and received by the function.
*/

// Default parameter value
function myFunction(x, y = 10){
    return x+y;
}
console.log(myFunction(4))// passing only one argumet 
console.log(myFunction(4,5));