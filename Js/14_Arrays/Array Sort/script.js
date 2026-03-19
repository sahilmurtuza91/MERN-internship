// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort()) // ascending order --> chnage the original array
// console.log(fruits.reverse()) // reverse element of array--> chnage the original array

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toSorted(); // sort but unchaged the original array
// console.log(months);
// console.log(sorted);

// const reversed = months.toReversed(); // sorth but not change the original array make new array
// console.log(months);
// console.log(reversed);

// // sort() function perform the corect operation on string but provide the incorrect operation on number
// // fix this by providing a compare function: .sort(function(a,b){return a-b}) for ascending and for descending return b-a

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a,b){return a-b}); // ascending order
// console.log(points);

// const points1 = [40, 100, 1, 5, 25, 10];
// points1.sort(function(a,b){return b-a}); // descending order
// console.log(points1);

// //  Fisher Yates shuffle--> Use to sort the arrsy --> randomaly sort the array
// const points2 = [40, 100, 1, 5, 25, 10];
// for(let i = points2.length-1; i>0; i--){
//     let j = Math.floor(Math.random()*(i+1));
//     let k = points2[i];
//     points2[i] = points2[j];
//     points2[j] = k;
// }
// Find the Lowest (or Highest) Array Value

// minimum
const points3 = [40, 100, 1, 5, 25, 10]
function minArrayElement(points3){
    return Math.min(...points3); // this is spread operator that is used in the mordern js
    // return Math.min.apply(null, points3);
}
console.log(minArrayElement(points3))

// find maximum

const points4 = [ 40,100,1,3,45,67,87];
function MaxElement(x){
    // return Math.max(...x);// moderjs
    return Math.max.apply(null,x);// old js
}
console.log(MaxElement(points4))


// Sorting Object Arrays
// ----> compare based on the numberic
const cars=[
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
// based on the numberic value
cars.sort(function(a,b){
    return a.year - b .year
})
// console.log(cars);
for(let i =0; i<cars.length; i++){
    console.log(cars[i].type+" --> "+cars[i].year);
}

// based on the string comparision
const cars1=[
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];

console.log("Cmparision based on the string")
cars1.sort(function(a,b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if(x<y){
        return -1;
    }
    if(x>y){
        return 1;
    }
    return 0;
});
for(let i =0; i<cars.length; i++){
    console.log(cars1[i].type+" --> "+cars1[i].year);
}

// another way to sompare the string
console.log("Another way to sompare based on the string")
const cars2=[
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
cars2.sort(function(a,b){
    return a.type.localeCompare(b.type);
})
for(let i =0; i<cars2.length; i++){
    console.log(cars2[i].type+" --> "+cars2[i].year)
}

const myArr = [
  {name:"X00",price:100 },
  {name:"X01",price:100 },
  {name:"X02",price:100 },
  {name:"X03",price:100 },
  {name:"X04",price:110 },
  {name:"X05",price:110 },
  {name:"X06",price:110 },
  {name:"X07",price:110 },
  {name:"X08",price:120 },
  {name:"X09",price:120 },
  {name:"X10",price:120 },
  {name:"X11",price:120 },
  {name:"X12",price:130 },
  {name:"X13",price:130 },
  {name:"X14",price:130 },
  {name:"X15",price:130 },
  {name:"X16",price:140 },
  {name:"X17",price:140 },
  {name:"X18",price:140 },
  {name:"X19",price:140 }
];

myArr.sort(function(a,b){
    if(a.price<b.price){
        return -1;
    }
    if(a.price>b.price) return 1;
    return 0;
});
for(let i = 0; i<myArr.length; i++){
    console.log(myArr[i].name+"  "+myArr[i].price);
}