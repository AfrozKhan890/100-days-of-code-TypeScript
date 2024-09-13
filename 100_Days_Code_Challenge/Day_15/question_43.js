"use strict";
// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
let Magicians = ["Harry Houdini", "David Blaine", "Derren Brown", "David Copperfield"];
function copyArray(myArray) {
    return [...myArray];
}
function make_great(magiciansArray) {
    // Create a copy of the array to avoid modifying the original
    let modifiedArray = [...magiciansArray];
    for (let i = 0; i < modifiedArray.length; i++) {
        modifiedArray[i] = "The Great " + modifiedArray[i];
    }
    return modifiedArray;
}
function Show_Magicians(magicians) {
    magicians.forEach(Element => {
        console.log(Element);
    });
}
const copymagiciansArray = copyArray(Magicians);
const greatMagiciansArray = make_great(copymagiciansArray);
console.log("\n\nThis is my Original Array:");
Show_Magicians(Magicians);
console.log("\n\nThis is my Changeable Array:");
Show_Magicians(greatMagiciansArray);
