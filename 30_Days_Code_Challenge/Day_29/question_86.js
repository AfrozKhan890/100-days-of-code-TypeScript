"use strict";
// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is 
// present in a given string. It should return true if found, otherwise false.
function TextPresence(str) {
    return str.includes('JavaScript'.toLowerCase());
}
console.log(TextPresence('I love JavasCriPT.'.toLowerCase()));
console.log(TextPresence('I love Python.'.toLowerCase()));
