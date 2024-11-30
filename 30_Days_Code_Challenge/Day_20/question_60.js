"use strict";
// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
let userProfile = (function () {
    let name = "Afroz";
    let age = 17;
    return {
        displayInfo: function () {
            console.log(`Name: ${name} \nAge: ${age}`);
        }
    };
})();
userProfile.displayInfo();
