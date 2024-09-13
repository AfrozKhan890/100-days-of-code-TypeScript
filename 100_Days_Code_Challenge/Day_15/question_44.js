"use strict";
// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
// with the help of 'join'
function make_Sandwich(...sandwich) {
    console.log(`Making your Sandwich with:  ${sandwich.join(', ')}`);
}
make_Sandwich("Mushroom and Olive", "Spinach and Feta", "White Pizza");
make_Sandwich("avocado", "sprouts", "mustard", "mayo");
make_Sandwich("BBQ Chicken");
// with the help of 'foreach' loop
function Sandwiches(...items) {
    console.log("\nMaking your sandwich with: ");
    items.forEach(item => {
        console.log(item);
    });
}
Sandwiches("avocado", "sprouts", "mustard", "mayo");
Sandwiches("avocado", "mayo");
