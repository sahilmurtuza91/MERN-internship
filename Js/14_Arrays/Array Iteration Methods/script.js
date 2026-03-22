// // for each method
// const numbers = [45, 4, 9, 16, 25];
// numbers.forEach((value)=>{
//     console.log(value);
// })


// // another way
// numbers.forEach(myFunction);
// function myFunction(value){
//    return value;
// }
// console.log(myFunction(numbers));
// console.log(numbers);

// // map() --> Create a NEW array by modifying each element of the original array but does not change the original array.
// /*
// syntax:
// array.map(function(value, index, array){
//     // return new value
// });
// */
// const newArray = numbers.map((value)=>{
//     return value*2;
// })
// console.log(newArray)
// const num = [ 2.3,4];
// const newNum = num.map((value)=>{
//     return [value, value*2];
// })
// console.log(newNum);
// // flatMap()
// const newNUm1 = num.flatMap((value)=>{
//     return [value, value*2];
// })
// console.log(newNUm1);

// // filter()---> create the new arry that passes the test
// const num2 = [45, 4, 9, 16, 25];
// const newFilterNumber = num2.filter((value)=>{
//     return value>18
// })
// console.log(newFilterNumber)

const books = [
{ title: 'Book One', genre: 'Fiction', publish: 1981,
edition: 2004 },
{ title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
edition: 2008 },
{ title: 'Book Three', genre: 'History', publish: 1999,
edition: 2007 },
{ title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
edition: 2010 },
{ title: 'Book Five', genre: 'Science', publish: 2009,
edition: 2014 },
{ title: 'Book Six', genre: 'Fiction', publish: 1987,
edition: 2010 },
{ title: 'Book Seven', genre: 'History', publish: 1986,
edition: 1996 },
{ title: 'Book Eight', genre: 'Science', publish: 2011,
edition: 2016 },
{ title: 'Book Nine', genre: 'Non-Fiction', publish: 1981,
edition: 1989 },
];

const filterBook = books.filter((bk)=>bk.genre==="History");
console.log(filterBook);




// /*
// The reduce() method runs a function on each array element to produce a single value.(method works from left-to-right in the array)


// */
// const numb = [2,4,6];
// // reduce() takes two parameters: total (accumulator) and value (current element)
// const sum = numb.reduce((total,value)=>{
//     console.log("current total: ",total,"current value:",value);
//     return total+value; // combine total and value
// },0) // 0 is the initial total
// console.log("final sum:", sum)

// // reduceRight() --> work from right to left
// const numb1 = [2,4,6];
// const sum1 = numb1.reduceRight((total, value)=>{
//     console.log("Current total: ",total, " current value: ",value);
//     return total+value;
// },0)
// console.log("final sum: ",sum1)

// // every() method checks if all array values pass a test.
// const numbers1 = [45, 4, 9, 16, 25];
// const allOver18 = numbers1.every((value)=>{
//     return value>18;
// })
// console.log(allOver18) // false

// // some() method checks if some array values pass a test.
// const someOver18 = numbers1.some((value)=>{
//     return value>18;
// })
// console.log(someOver18)

// // Array.from() -- > method returns an Array object from
// let text = "Sahil";
// console.log(Array.from(text));

// //  Array.keys() method returns an Array Iterator object with the keys of an array.(return position of the element)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keyText = fruits.keys();
// for(let i of keyText){
//     console.log(i)
// }

// // entries() method returns an Array Iterator object with key/value pairs:
// const months = ["Januar", "Februar", "Mar", "April"];
// let k = months.entries();
// for(let i of k){
//     console.log(i)
// }


// // The ... operator expands an array into individual elements.

// // This can be used join arrays:
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [...arr1,...arr2];
// console.log(arr3);


// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "Des"];
// const year = [...q1,...q2,...q3,...q4];
// console.log(year)

// let a, rest;
// const a1 = [1,2,3,4,5,6,7,8,9];
// [a,...rest] = a1;
// console.log(rest)

// const a11 = [1,2,3,4,5,6,7,8,9];
// const [a12,b,...rest1] = a11; // first element of a11 → 1 and second element of a11 → 2 and so on...
// console.log(rest1);