"use strict";
var friends_Names = ["Afroz Khan", "Aftab Khan", "Murad Ali", "Admin", "Jawad Saeed"];
for (let i = 0; i < friends_Names.length; i++) {
    if (friends_Names[i] == 'Admin') {
        console.log(`\n'''Hello ${friends_Names[i]}, Would you like to see a status report?'''`);
    }
    else {
        console.log(`\nHello ${friends_Names[i]}, thank you for logging in again.`);
    }
}
