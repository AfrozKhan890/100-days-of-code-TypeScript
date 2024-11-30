"use strict";
// Question 42: Great Magicians: Add "the Great" to magician names.
let Magicians = ["Harry Houdini", "David Blaine", "Derren Brown", "David Copperfield"];
// Function to display a list of Magicians using forEach loop
function show_Magician(Magicians) {
    Magicians.forEach(magician => {
        console.log(magician);
    });
}
// Function to add "The Great" to each magician's name
function the_Great(Magicians) {
    for (let i = 0; i < Magicians.length; i++) {
        Magicians[i] = "The Great " + Magicians[i];
    }
}
the_Great(Magicians); // First, modify the names
show_Magician(Magicians); // Then, display the modified names
