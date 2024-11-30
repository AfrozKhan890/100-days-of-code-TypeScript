// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a 
// specific number to any other number you give them later.

function make_adder(addingValue:number): (num:number) => number {
    return function(num:number):number{
        return num + addingValue;
    }
}

let adding = make_adder(10);
console.log(adding(15));
