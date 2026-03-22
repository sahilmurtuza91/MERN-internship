// An iterable is anything you can loop over, like a list of items.

// for...of Loop --> This loop is used to go through each item in an iterable.
// Iterating means looping over a sequence of elements.
const name = "Sahil murtuza";
for(let i of name){
    console.log(i);
}
console.log("array --> for .. of")
const letters = ["a","b","c"];
for(let i of letters){
    // console.log(letters[i]); // this gives undefind because of using the for of loop
    console.log(i);
}

console.log("sets element print: ")
const letters1 = new Set(["a","b","c"]);
for(let i of letters1){
    console.log(i)
}

console.log("Map element")
const fruits2 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const x of fruits2) {
  console.log(x);
}