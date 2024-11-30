// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each 
// section based on what you need at that moment, like adjusting labels based on user choices.

function make_flexible(key:string, value:string) {
    let dynamicObject:{[key:string]:string}= {};

    dynamicObject[key] = value;
    return dynamicObject;
}

let userNeed1 = make_flexible("Battery","70%");
let userNeed2 = make_flexible("Theme","Dark");
console.log(userNeed1,userNeed2);
