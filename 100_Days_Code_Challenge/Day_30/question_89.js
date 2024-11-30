"use strict";
// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") 
// and converts it into an actual number type.
function converts_string_to_number(str) {
    return parseFloat(str);
}
console.log(converts_string_to_number('32')); // Output:32, as a number not as a string
console.log(converts_string_to_number('65.65')); // Output:65.65, as a number not as a string
