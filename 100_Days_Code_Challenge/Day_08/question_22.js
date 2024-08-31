"use strict";
let friends = ["Alice", "Bob", "Charlie"];
console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Charlie";
let Friends = ["Abid", "Shayan", "Murad", "Kamran"];
console.log(Friends[4]); // Intentional error: Arrays are zero-indexed, so index 4 is out of bounds.
Friends[3] = "Kamran"; // Correcting the error by accessing a valid index.
