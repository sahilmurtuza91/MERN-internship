// The length property returns the length (size) of an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);
// length property is alos used to set the size of an array
fruits.length = 2; // reduce the length of an array, JavaScript will remove the extra elements from the end.
console.log(fruits);

// The toString() method returns the elements of an array as a comma separated string
console.log(fruits.toString());

// at() --> get the elemet via index
console.log(fruits.at(1));
console.log(fruits[1]);

// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:

console.log(fruits.join("--"));

// The pop() method removes the last element from an array( and method returns the value that was "popped out")
const fruits1 = ["Banana", "orange", "apple", "mango"];
console.log(fruits1.pop());
console.log(fruits1);

// The push() method adds a new element to an array (at the end) and The push() method returns the new array length
console.log(fruits1.push("cherry"));
console.log(fruits1);

// The shift() method removes the first array element and "shifts" all other elements to a lower index.

console.log(fruits1.shift());
console.log(fruits1);

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements and returns the new array length

console.log(fruits1.unshift("Banana"));
console.log(fruits1);

fruits1[0] = "kiwi";
console.log(fruits1);

// check is this array or not
console.log(Array.isArray(fruits1));

// use delete
delete fruits1[0]; // make the emipty at that position
console.log(fruits1);

// The concat() method creates a new array by merging (concatenating) existing arrays

const Girls = ["Cecilie", "Lone"];
const Boys = ["Emil", "Tobias", "Linus"];
const Student = Girls.concat(Boys);
console.log(Student);
console.log(Array.isArray(Student));

// concat() can take ay number of array

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const mergeArray = arr1.concat(arr2, arr3);
console.log(mergeArray);

// The concat() method can also take strings as arguments
const arrString = arr1.concat("Peter");
console.log(arrString);

// The copyWithin() method copies array elements to another position in an array -->  method overwrites the existing values.
// Array ke elements ko copy karke usi array ke kisi aur position par paste karna
// syntax: array.copyWithin(target, start, end)
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.copyWithin(2, 0, 1);
console.log(fruits3);
const myArr = [
    [1, 2],
    [3, 4],
    [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);
console.log(myArr);

// The splice() method use to ( add, remove, or replace elements in an array). syntx:--> array.splice(start, deleteCount, item1, item2, ...)
// The slice() method slices out a piece of an array.

// splice();
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.splice(2, 0, "Lemon", "Kivi"); // 2--> start position, 0--> no. of delete element
console.log(fruits4);

// splice() to remove elements without leaving "holes" in the array. unlike the delete.
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(1, 3);
console.log(fruit);

// toSplice() is differ from the splice() becasue splice() chnage the original arry but toSplice() create the new array
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(2, 0, "may", "jun", "July", "Aug");
console.log(spliced);
