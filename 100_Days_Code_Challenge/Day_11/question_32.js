"use strict";
// Question 32:Checking Usernames: Ensure uniqueness in usernames.
let current_users = ["Afroz Khan", "Aftab Khan", "Murad Ali", "Admin", "Jawad Saeed"];
let new_users = ["Afroz khaN", "Ali", "Faizan", "Wahab", "Aftab KhaN"];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
