// // length property return lenmgth of the string

let myName = "Sahil Murtuza";
console.log(myName.length);

// .charAt() --> method returns the character at a specified index (position) in a string:
console.log(myName.charAt(2));

// .charCodeAt() --> The charCodeAt() method returns the unicode of the character at a given position in a string:

console.log(myName.charCodeAt(0));

// .codePointAt()
// Returns the full Unicode code point of the character.
console.log(`print the code point ${myName.codePointAt(0)}`);

// // The at() method returns the character at a specified index (position) in a string.

console.log(myName.at(0));

// Property Access [ ] --> if no character is find then it return undefined
let text1 = "";
console.log(text1[0]);
console.log(text1.charAt(0));

let text = "Hello World";
console.log(text[0]);

text[0] = "s"; // Gives no error, but does not work
console.log(text);

// concat() joins two or more strings:

let text3 = "Hello";
let text2 = "World";
let text4 = text3.concat(" ", text2);

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
console.log("slicing");
let newtext = "Apple, Banana, Kiwi";
let extractPart = newtext.slice(7, 13);
console.log(extractPart);
console.log(newtext.slice(7)); //-> this takes the elemet dtarting from 7 index and gors to the last because the seconf parametere is not given

// If a parameter is negative, the position is counted from the end of the string

console.log(`Using the negative index: ${newtext.slice(-12)}`);

console.log("\n Using the substring");
console.log(newtext.substring(7, 13));

// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.

console.log(newtext.substr(7, 6));

// Converting  lower case to upper.
console.log(newtext.toUpperCase());

// Converting upper to lower case
console.log(newtext.toLocaleLowerCase());

// iswellFormed--> method returns true if a string is well formed.
console.log(
  "\nchecking the string is wellFormed or not:- " + newtext.isWellFormed(),
);

let text5 = "Hello World \uD800";
console.log(text5.isWellFormed());

// toWellFormed -->The String method toWellFormed() returns a new string where all "lone surrogates" are replaced with the Unicode replacement character (U+FFFD).
let result1 = text5.toWellFormed();
console.log("\nConverting the text to well formed: " + result1);

//The trim() method removes whitespace from both sides of a string:
let test1 = "     Hello World     ";
console.log(test1.trim());

// trimeStart() ---> remove the white space from the starting
console.log(test1.trimStart());

// trimEnd() -->rempve the white spave from the end not start
console.log(test1.trimEnd());

// padStart(timesToRepeat, character/string) -->It pads a string with another string (multiple times) until it reaches a given length.

let test2 = "5";
let padstart = test2.padStart(4, "0");
console.log(`\nHere we use the padStart:-- ${padstart}`);

// padEnd() --> It pads a string with another string (multiple times) until it reaches a given length.

let padend = test2.padEnd(4, "x");
console.log(
  `\npadd the string at the end of the string by using padEnd()--> ${padend}`,
);

// Important note:--> to pad a numver, convert it to string then apply padd becasue pad apply only the string

// .repeat(times)  --> methods return a new string with the number of times and this methos does not change the original string

let test3 = "Sahil Murtuza";
let test3Result = test3.repeat(3);
console.log("Here we use the .repeat():  " + test3Result);

// .replace() --> replaces only the first match, return new string and does not change the string

// if want to replace all the match then use /g

// if want to make it case-insensative then use /i

let test4 = "Please visit Microsoft and Microsoft!";
let newtest1 = test4.replace("Microsoft", "W3Schools");
console.log(newtest1);

// case-inSensative
let testResult2 = test4.replace(/microsoft/i, "W3School");
console.log(testResult2);

// make to replace all match

let testResult3 = test4.replace(/Microsoft/g, "W3chool");
console.log(testResult3)

// .replaceAll() --> here we have to alway specify a regular expression insted of string  to be replaces

let test5 = "I love cats. Cats are very easy to love. Cats are very popular";
test5 = test5.replaceAll(/cats/g, "Doges")
console.log(test5)
test5 = test5.replaceAll(/cats/g,"dogs");
console.log(test5)

// .split() --> string is converted to array using this method

let splitTest = "I love cats. Cats are very easy to love. Cats are very popular";
let words = splitTest.split(" ");
console.log(words[2])

// JavaScript String Search

// indexOf():--> returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
let stringTest1 =  "Please locate where 'locate' occurs!";
console.log(stringTest1.indexOf("locate"))

// lastIndexOf() --> returns the index of the last occurrence of a specified text in a string:
console.log(stringTest1.lastIndexOf("locate"))

// search()  --> searches a string for a string (or a regular expression) and returns the position of the match:
console.log(stringTest1.search("locate"))
console.log(stringTest1.search(/locate/))

// The search() method cannot take a second start position argument.

// The indexOf() method cannot take powerful search values (regular expressions).

// match() --> method returns an array containing the results of matching a string against a string (or a regular expression).

let stringTest2 = "The rain in SPAIN stays mainly in the plain";
console.log(stringTest2.match(/ain/));

let result = Array.from(stringTest2.matchAll(/ain/g));
console.log(result);

// .includes() --> method return true if a string contain a specified value

let stringTest3 = "Hello world, welcome to the universe.";
console.log(stringTest3.includes("world"))
console.log(stringTest3.includes("Sahil"))

// we can also gives the start position from where it start to search

// console.log(stringTest3.includes("world", 12)) // gives false becase worls comes befor the index 12 but it start searching from index 12

// startWith()
console.log();
console.log(stringTest3.startsWith("Hello"))
console.log(stringTest3.startsWith("world"))
console.log(stringTest3.startsWith("Hello", 12))

console.log()
console.log(stringTest3.endsWith("universe."))