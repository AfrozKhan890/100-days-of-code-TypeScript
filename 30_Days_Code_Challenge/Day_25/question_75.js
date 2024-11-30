"use strict";
// **Question 75:** Compound Assignment Operators: Use compound assignment operators to simplify arithmetic
//  operations. Start with `x = 4` and perform a series of operations (addition, subtraction, multiplication, 
// division) on `x` using compound operators.
function Compound_Operator() {
    let x = 10;
    console.log("Initial Value of x:", x);
    x += 6;
    console.log("After Addition Value of x:", x);
    x -= 4;
    console.log("After Subtraction Value of x:", x);
    x *= 3;
    console.log("After Multiplication Value of x:", x);
    x /= 6;
    console.log("After Division Value of x:", x);
}
Compound_Operator();
