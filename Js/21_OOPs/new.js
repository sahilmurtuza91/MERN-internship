// In JavaScript, functions are not just functions — they are objects too.

function multiply5(num){
    return num*5;
}
multiply5.power = 2;

console.log(multiply5(5));
console.log(multiply5.power); // Accessing the custom property
console.log(multiply5.prototype) // {}

// function is also like object so that we can add property like object
// multiply5.power = 2;

/*
now function body look like this
{
  function body,
  power: 2
}
*/

function createUser(username, score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.prinMe = function(){
    console.log((`price is ${this.score}`));
}
const chai = new createUser("chai",25);
const tea = new createUser("tea",250);

chai.prinMe();