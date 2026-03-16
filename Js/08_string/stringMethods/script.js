// length property return lenmgth of the string

let myName = "Sahil Murtuza";
console.log(myName.length)

// .charAt() --> method returns the character at a specified index (position) in a string:
console.log(myName.charAt(2))

// .charCodeAt() --> The charCodeAt() method returns the unicode of the character at a given position in a string:

console.log(myName.charCodeAt(0))

// .codePointAt()
// Returns the full Unicode code point of the character.
console.log(`print the code point ${myName.codePointAt(0)}`)

// The at() method returns the character at a specified index (position) in a string.

console.log(myName.at(0))

// Property Access [ ] --> if no character is find then it return undefined
let text1 = ""
console.log(text1[0]);
console.log(text1.charAt(0))

let text = "Hello World"
console.log(text[0])

text[0] = "s";  // Gives no error, but does not work
console.log(text)

// concat() joins two or more strings:

let text3 = "Hello";
let text2 = "World";
let text4 = text3.concat(" ",text2);

// Extracting String Parts
/**
1. slice(start, end)
2. substring(start, end)
3. substr(start, length)


difference between slice and substring

|Feature-----------|slice()        |substring()  |
|------------------|---------------|-------------|
| Negative numbers | Allowed       | Not allowed |
| start > end      |Returns""      |Swaps the values |
                    (empty string) | 
 */

// slice() -->extracts a part of a string and returns the extracted part in a new string.
console.log("slicing")
let newtext = "Apple, Banana, Kiwi";
let extractPart = newtext.slice(7,13)
console.log(extractPart)
console.log(newtext.slice(7))//-> this takes the elemet dtarting from 7 index and gors to the last because the seconf parametere is not given

// If a parameter is negative, the position is counted from the end of the string

console.log( `Using the negative index: ${newtext.slice(-12)}`)

console.log("\n Using the substring")
console.log(newtext.substring(7,13));


// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.

console.log(newtext.substr(7,6))


// Converting  lower case to upper.
console.log(newtext.toUpperCase())

// Converting upper to lower case
console.log(newtext.toLocaleLowerCase())
