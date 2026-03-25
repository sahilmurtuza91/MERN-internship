// 1.Write a program to calculate the average of array elements.
const userInput = require("prompt-sync")();
const n = Number(userInput("Entre the size of the array: "));
let arr = [];
for(let i =0; i<n; i++){
    arr[i] = Number(userInput("Enter element: "));
}

// calculate the average of an array
let sum = 0;
for(let i =0; i<n; i++){
    sum += arr[i];
}
console.log(`Average of the number is: ${(sum/n).toFixed(2)}`);

// 2.Write a program to find the index of a given number in an array.
let number = Number(userInput('Enter the number to find its index: '));
let found = false;
for(let i =0; i<n ; i++){
    if(number === arr[i]){
        console.log(`index: ${i} of element ${number}`);
        found = true;
        break;
    }
}
if(!found){
    console.log("Element not found!")
}

// 3.Write a program to replace all vowels with * in a string. [a,e,i,o,u]
let userString = userInput("Enter the string: ");
let result = "";
for(let i = 0; i < userString.length; i++){
    let ch = userString[i].toLowerCase();
    if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
        result += '*';
    }
    else{
        result +=userString[i];
    }
}
console.log(`replace string: ${result}`);

//5.Write a program to merge two arrays in sorted manner(final array should be sorted).
let arr1 = [2,5,3,8,6,4];
let arr2 = [7,9,23,1,10];
let finalArray = [];
arr1.sort((a,b)=>a-b);
arr2.sort((a,b)=>a-b);
let i =0, j=0;

while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        finalArray.push(arr1[i]);
        i++;
    }
    else{
        finalArray.push(arr2[j]);
        j++;
    }
}
// remaining element
while(i < arr1.length){
    finalArray.push(arr1[i]);
    i++;
}
while(j < arr2.length){
    finalArray.push(arr2[j]);
    j++;
}
console.log(`Final merge sorted array: ${finalArray}`);