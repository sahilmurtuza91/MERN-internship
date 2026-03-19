// new Map() -->create map
// get() --> get the value by using the key
// set() --> add the value to the map in the form of key value
// and set() method is also usde to change the vaue of of existing key value

// size property returns the number of elements in a map:


// // Create a Map
const fruits = new Map([
    ["apple",500],
    ["banana",300],
    ["orange",578]
]);

fruits.set(56,"apple");// any datatype can me alos added

console.log(fruits.size)
console.log(fruits)

// delete() method removes a map element
fruits.delete(56);
console.log(fruits.size)

// has(key) chack that the elemet is present in the map
console.log(fruits.has("apple"));


// // clear() method removes all the elements from a map
// fruits.clear();
// console.log(fruits.size) // 0
// console.log(fruits.has("apple"))// false

//forEach() method invokes a callback for each key/value pair in a map:
fruits.forEach((value, key)=>{
    console.log("key:->",key," value:->",value);
})

// entries() method returns an iterator object with the [key,values] in a map

console.log(fruits.entries())

for(let i of fruits.entries()){
    console.log(i);
}

// keys() method returns an iterator object with the keys in a map
console.log(fruits.keys()) // gives the all keys

// values() method returns an iterator object with the values in a map

console.log(fruits.values())// gives all the value

// sum all the values
let sum = 0;
for(let i of fruits.values()){
    sum += i;
}
console.log(sum);

// Objects as Keys
const apples = { name: "Apple"};
const banana = { name: "Banana"};
const orange = { name: "Orange"};

// create a Map
const fruitsObj = new Map();

// Add new Element(objecta as a key of the map) to the map
fruitsObj.set(apples,500);
fruitsObj.set(banana, 300);
fruitsObj.set(orange,500);

console.log(fruitsObj)