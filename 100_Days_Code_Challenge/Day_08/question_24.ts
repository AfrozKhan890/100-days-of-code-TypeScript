// Question 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// • Tests for equality and inequality with strings
let string1: string = "Afroz";
let string2: string = "Khan";

console.log("Equality and inequality with strings:   ");
console.log(string1 == "Afroz");
console.log(string1 == string2);


// • Tests using the lower case function
console.log("\nTests using the lower case function:   ");
console.log(string1.toLowerCase() == 'afroz');
console.log(string2.toLowerCase() == 'KhAn');

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number1:number = 100;
let number2:number = 50;

console.log("\nEquality and inequality with numbers:   ");
console.log(number1>=number2);
console.log(number1<=number2);

// • Tests using "and" and "or" operators
console.log("\nEquallity and inequality with numbers using '&' and '|' operators:   ");
console.log(number1>=number2 && number1 <= 130);
console.log(number1<=number2 || number2 >= 60);

// • Test whether an item is in a array
let myArray:number[] = [1, 2, 3, 4, 5, 6];
console.log("\nArray members:");
console.log(myArray.includes(3));
console.log(myArray.includes(7));

// • Test whether an item is not in a array
console.log("\nIt is not an array member:");
console.log(!myArray.includes(8));
console.log(!myArray.includes(4));