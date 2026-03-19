// // An array is a special type of variable that can store multiple values in a single variable.

// // Synatx to create array: 
// // const arry_nmae = [item1, item2,...];

// // You do not need to define size when creating an array.(because JavaScript arrays are dynamic tey acn grow or shrink automativcally and we can assign differnt datatype of value in the same array)



// const cars = ["saab", "Volvo", "BMW"]
// console.log(cars); // this will gives the whole array inside the []
// console.log(cars[0]);

// for(let x in cars){
//     console.log(cars[x]);
// }

// // create empty arry then assing the calue to it
// console.log("\ninserting the value after the creation of the array: \n")
// const cars1 = [];
// cars1[0] = "Saab";
// cars1[1] = "Volvo"; // Insert the value to the aray
// cars1[2] = "BMW";
// cars1[4] = "Fortuner"; // index 3 is skipped
// cars1.push("Brezza"); // this is alos the way to insert value to array (push() always adds to the next available index)
// console.log(cars1[3]);  // undefined
// console.log(cars1[4]);
// console.log()

// for(let x in cars1){
//     console.log(cars1[x]);
// }
// console.log(cars1.length)


// const cars2 = new Array("Saab", "Volvo", "BMW") //also creates an Array, and assigns values to it


// const cars4 = ["Saab", 3, "Volve", "376"];
// console.log(cars4);
// // also changing the value of an array
// cars4[1] = 467;
// cars4[2] = 374458;
// console.log(cars4)
// console.log(typeof cars4) // object
// console.log(typeof cars) // object

// // Changing array to string
// console.log(cars4.toString());

// console.log(cars4.sort()); // sorted array

// // accsesing the last element of an array
// console.log(cars4[cars4.length-1]);


// // forEach() is an array method that:
// // 1. Calls a function repeatedly (once for each element)
// // 2. Passes the current array element to the function each time
// // 3. Executes the code inside the function for every element
// // forEach() runs a function once for each element of an array

// const fruits = ["Banana", "Orange", "Apple"];
// fruits.forEach((value)=>{
//     console.log(value);
// });

// // we can also add the element using the legth
// fruits[fruits.length] = "Mango";
// console.log(fruits)

// // In JavaScript, arrays use numbered indexes.  
// // In JavaScript, objects use named indexes.
// const point =[40];
// console.log(point)
// const point1 = new Array(40) // this both are different

// // if we us e the typeof for array irt  give the objecct but in the same case ibject will also gives the object to to know is this array or not we use Array.isArray(fruits);

// console.log(typeof fruits);
// console.log(Array.isArray(fruits)) // if array then it return true otherwise it return false;


// // The instanceof operator returns true if an object is created by a given constructor
// const fruits3 = ["Banana", "Orange", "Apple"];

// console.log((fruits3 instanceof Array)); // if array return true otherwise false.

//Nested Arrays and Objects
//Values in objects can be arrays, and values in arrays can be objects

const myObj = {
    name: "jhon",
    age: 30,
    cars: [
        { name: "ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}

// console.log(myObj.cars[0].models)
for (let i in myObj.cars) {
    console.log(myObj.cars[i].name);
    console.log()
    myObj.cars[i].models.forEach((value) => {
        console.log(value)
    });
}