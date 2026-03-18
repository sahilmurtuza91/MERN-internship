function multiply(a,b){
    return a*b;
}
let result = multiply(2,3)*4;
console.log(result);

// Function stop after the return statement
function add(a,b){
    return "This is additioin function but not add the value because it return befor addition";

    return a+b;
}
console.log(add(4,6));

// If the  function does not return a value, the return value will be undefined.

function sub(a, b){
    let x = a-b;
    console.log("This function that doesn't retrn anythings")
}
console.log(sub(5,3)) // value of return is undefined

// we can use return to stop a function early, based on a condition.
function checkAge(age){
    if(age<18){
        return "Not eligible for vote";
    }
    else{
        return "Eligible for vote";
    }
}
console.log(checkAge(21));
