
// Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.



// Version that runs the if block:
let Alien_color:string = 'Green';

console.log("\nOutput of If Condition:  ");
if (Alien_color === 'Green') {
    console.log("Congratulations! You have earned 5 points.");
}
else{
    console.log("Congratulations! You have earned 10 points.");
    
}

// Version that runs the else block:
console.log("\nOutput of else condition:  ");

Alien_color = "yellow";
if (Alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}