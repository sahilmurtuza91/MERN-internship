const d = new Date();
console.log(d);

const d1 = new Date("2026-03-18");
console.log(d1);

const d2 = new Date("Hello")
console.log(d2) // Invalid Date

/*
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/

// new Date(date string) creates a date object from a date string:
const da1 = new Date("March 17, 2026 01:24:00")
console.log(da1);

// new Date(year, month, ...) creates a date object with a specified date and time.

const da2 = new Date(2025, 0, 17, 1, 27, 0);
console.log(da2);

const date = new Date();
console.log(date.toString());
console.log(date.toDateString()) // more redable formate then toString

//The toUTCString() method converts a date to a string using the UTC standard:
console.log(date.toUTCString())

// The toISOString() method converts a date to a string using the ISO standard:

console.log(date.toISOString())

// Date.parse() returns the number of milliseconds between the date and January 1, 1970:

console.log(Date.parse(date));

// getFullYear()	Get year as a four digit number (yyyy)
console.log(date.getFullYear())

// getMonth()	Get month as a number (0-11)
console.log(date.getMonth());

// getDate()	Get day as a number (1-31)
console.log(date.getDate());

// getDay()	Get weekday as a number (0-6)
console.log(date.getDay())

// getHours()	Get hour (0-23)
console.log(date.getHours())

// getMinutes()	Get minute (0-59)
console.log(date.getMinutes())

// getSeconds()	Get second (0-59)
console.log(date.getSeconds())

// getMilliseconds()	Get millisecond (0-999)
console.log(date.getMilliseconds());

// getTime()	Get time (milliseconds since January 1, 1970)
console.log(date.getTime());

// --------------------------JavaScript Set Date Methods------------------

console.log("Performing the date set operation")
const date1 = new Date ("January 01, 2026")
date1.setFullYear(2026)
console.log(date1)

date1.setFullYear(2020, 11, 3);
