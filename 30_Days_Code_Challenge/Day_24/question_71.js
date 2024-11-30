"use strict";
// Question 71: Compare let and const: Create two examples where let allows reassignment but const does
// not. Try to reassign a const-declared variable and catch the error.
let myFriend = "Aftab Khan";
myFriend = "Ali Abid";
console.log(myFriend);
const friend_age = 20;
try {
    friend_age = 24; // This is the cause of error because const is not a reusable variable.
}
catch (error) {
    console.log("Const is not a reusable variable");
}
