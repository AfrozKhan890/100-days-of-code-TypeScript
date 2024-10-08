"use strict";
// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let mixedArray = ["coding", "error", 0, true, "TypeScript"];
let stringArray = mixedArray.filter(name => typeof name === "string");
console.log(stringArray);
