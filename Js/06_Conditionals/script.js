// if

let age =7;
if(age>=18){
    console.log("Eligible for vote");
}
else{
    console.log("not Elogible to vote");
}

let country = "USA";
let text = "You can Not drive!";

if (country == "USA") {
  if (age >= 16) {
    text = "You can drive!";
    console.log(text)
  }
  else{
    console.log("you can't drive")
  }
}
console.log()
if (country == "USA" && age >= 16) {
  text = "You can drive!";
  console.log(text)
}


// if else if else
const time = new Date().getHours();
let greeting;
console.log("Tme in the hour is: "+ time);
if(time <10){
    greeting = "Good Morning";
    console.log(greeting);
} else if(time<20){
    greeting = "Good day";
    console.log(greeting);
}else{
    greeting = "Good evening"
    console.log(greeting);
}