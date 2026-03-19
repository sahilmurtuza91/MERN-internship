// new Set() --> create set
// add() ==> add element to set
// has() method returns true if a specified value exists in a set
// forEach()
// values() method returns an Iterator object with the values in a Set:
// keys() method returns an Iterator object with the values in a Set:


// size proprty
const mySet = new Set([1,2,3,4,5]);
console.log(mySet.size)// 5

// has() method returns true if a specified value exists in a set
console.log(mySet.has(3)); // true
console.log(mySet.has(9))// false

mySet.forEach((value)=>{
    console.log(value);
})

// values() method returns an Iterator object with the values in a Set:
console.log(mySet.values()); // gives the all value

const letters = new Set(["a","b","c"]);
let text = "";
for(let i of letters.values()){
    text += i +" ";
}
console.log(text);

// keys() method returns an Iterator object with the values in a Set:
const keyIterator = letters.keys();
for(let i of keyIterator){
    console.log(i);
}

// entries() method returns an Iterator with [value,value] pairs from a Set.(returns [value,value])
const entriesIterator = letters.entries();
for(let i of entriesIterator){
    console.log(i);
}