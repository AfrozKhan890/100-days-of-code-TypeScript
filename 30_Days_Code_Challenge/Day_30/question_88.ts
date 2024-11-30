// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded
// to the nearest integer.

function nearestInteger(num:number):number{
    return Math.round(num);
}

console.log(nearestInteger(5.67));// Output: 6
console.log(nearestInteger(8.5));// Output: 9
console.log(nearestInteger(4.29));// Output: 4
console.log(nearestInteger(8.49));// Output: 8
