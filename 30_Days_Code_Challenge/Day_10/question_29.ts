// Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.

let Favorite_Fruits:string[] = ["AppLe", "grAPes","PomegRante","bAnana"]

let LowerCaseFruit = Favorite_Fruits.map(fruit => fruit.toLowerCase())

if(LowerCaseFruit.includes("Banana".toLowerCase())){
    console.log("You really likes Banana.");
}
if(LowerCaseFruit.includes("Apple".toLowerCase())){
    console.log("You really likes Apple.");
}
if(LowerCaseFruit.includes("Pomegrante".toLowerCase())){
    console.log("You really likes Pomegrante.");
}
if(LowerCaseFruit.includes("Grapes".toLowerCase())){
    console.log("You really likes Grapes.");
}

// Continue with more fruits according to your favorite fruit list