let myName = "Sahil      ";
let address = "xyz    ";

// console.log(myName.trueLength);


let myHeros = ["thor","spiderman"];


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sahil = function(){
    console.log("This is sahil murtuza that is present in all objects")
}

Array.prototype.heySahil = function(){
    console.log("Hey sahil this prototype is given only to array not shared by any one")
}
heroPower.sahil();
myHeros.sahil();
myHeros.heySahil();
// heroPower.heySahil();

String.prototype.trueLength = function(){
    console.log(this.trim());
    console.log(`The length is: ${this.trim().length}`);
}

myName.trueLength();
"Sahil murtuza    ".trueLength();