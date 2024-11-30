// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle 
// and refactor it into an arrow function.

function calculateArea(width:number, height:number):number {
    return width * height;
}
let calculateAreaArrow = (width:number, height:number):number => width * height;
console.log(calculateAreaArrow(43,6));


