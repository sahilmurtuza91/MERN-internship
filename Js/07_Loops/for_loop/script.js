for (let i = 0; i < 5; i++) {
    console.log("sahil Murtuza")
}


const cars = ["BMW", "Volvo", "Saab", "Ford"]
let text1 = "";
for (let i = 0; i < cars.length; i++) {
    text1 = text1 + cars[i] + "<br>";
}
document.getElementById("demo1").innerHTML = text1;



// if the first condition is not given
const cars1 = ["BMW", "Volvo", "Saab", "Ford"]
let text2 = "";
let i = 2;
for (; i < cars.length; i++) {
    text2 = text2 + cars[i] + "<br>";
}
document.getElementById("demo2").innerHTML = text2;


// f we can also not the the third expression means cinf=dintion then it work but it mut be incremented or decrementd inside the loop

const cars3 = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

let j = 0;

let text3 = "";
for (; j < len;) {
    text3 += cars[j] + "<br>";
    i++;
}
document.getElementById("demo3").innerHTML = "THis is the another form of the loops uses --><br>"+ text3;

// // use of let and var in the loop

// let s =5;
// for(let s=0; s<10; s++){
//     console.log(s)
// }
// console.log("Here we are accesing the vareiable decleare outside the loop "+ s) // s=5

// // Using the var

// var m = 5;
// for(var m =0; m<10; m++){
//     console.log(m)
// }
// console.log("acces the variable outside the loop which is decleared outside the foor lop "+ m) // 10
