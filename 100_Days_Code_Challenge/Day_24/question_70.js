"use strict";
// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print 
// numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
function print_number_with_let() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}
print_number_with_let();