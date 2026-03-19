const fruits = ["Apple", "Orange", "Apple", "Mango"];

// indexOf() method searches an array for an element value and returns its position.
let position = fruits.indexOf("Apple"); // return the first occurance of the element
console.log(position)
let indexSetPosition = fruits.indexOf("Apple",1);
console.log(indexSetPosition);

// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
const lastPosition = fruits.lastIndexOf("Apple");
console.log(lastPosition);

// .includes() ---> This allows us to check if an element is present in an array (including NaN, unlike indexOf).
fruit = fruits.includes("Apple"); // true
console.log(fruit);
fruit1 = fruits.includes("kiwi"); // false
console.log(fruit1);

// find() method returns the value of the first array element that passes a test function.
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find((num)=>{
    return num>18;
})
console.log(first);

let firtNUm = numbers.find(fun1);

function fun1(num){
    return num>15;
}
console.log(firtNUm)

// findIndex() method returns the index of the first array element that passes a test function.
num1 = numbers.findIndex(fun2);
function fun2(num){
    return num>20;
}
console.log(num1);

// findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
const num3 =  numbers.findLast(testFunction);
function testFunction(num){
    return num>18;
}
console.log(num3);

// findLastIndex() method finds the index of the last element that satisfies a condition.

let pos = numbers.findLastIndex(test2Function);
function test2Function(num){
    return num>20;
}
console.log(pos);