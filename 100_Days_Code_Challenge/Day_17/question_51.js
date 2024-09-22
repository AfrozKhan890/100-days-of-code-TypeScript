"use strict";
// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle 
// and refactor it into an arrow function.
function calculateArea(width, height) {
    return width * height;
}
let calculateAreaArrow = (width, height) => width * height;
console.log(calculateAreaArrow(43, 6));
