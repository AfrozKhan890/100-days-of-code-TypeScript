"use strict";
// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns 
// their product. Round the result to two decimal places.
function MultiplyingDecimal(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(MultiplyingDecimal(1.1, 1.54));
