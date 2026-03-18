// Array Element sum
const userInput = require("prompt-sync")();
let n = userInput("Entre the size of the arry: ");
let arr = [];
for(let i=0; i<n; i++){
    let num = Number(userInput(`Enter the ${i+1} Elemrnt: `))
    arr.push(num);
}
let sum = 0;
for(let i =0; i<n; i++){
    sum += arr[i];
}
console.log(`Sum of the array is ${sum}`);

// Count how many times the character "a" appears in the given string. (const str="javascript" )
const str = "javascript";
let count = 0;
for(let i=0; i<str.length; i++){
    if(str[i].match(/a/i)){
        count++;
    }
}
console.log(`"a" appears ${count} times.`)

//Reverse the given string using loops.

let myStr = userInput("Entre the string:");
let reverseString ="";
for(let i=myStr.length-1; i>=0; i--){
    reverseString = reverseString + myStr[i];
}
console.log(reverseString);

// Create pattern
const x = 4;
for (let i =0; i<x; i++){
    let p ="";
    for(let j =0; j<=i; j++){
        p += "*";
    }
   console.log(p)
}


const y =5;
for (let i =0; i<y; i++){
    let p ="";
    for(let j =0; j<=i; j++){
        p += "*";
    }
   console.log(p)
}
console.log()
const a = 4;
for (let i =a; i>=1; i--){
    let p = "";
    for(let j =0; j<i; j++){
        p +="*";
    }
    console.log(p)
}
console.log()
const b = 5;
for (let i =b; i>=1; i--){
    let p = "";
    for(let j =0; j<i; j++){
        p +="*";
    }
    console.log(p)
}