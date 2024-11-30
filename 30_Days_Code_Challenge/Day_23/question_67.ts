// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string 
// that represents a number (e.g., "5"). Return their sum as a number. 

function add_String_and_Number(num1:number, numString:string):number{
    return num1 + Number(numString);
}

console.log(add_String_and_Number(5,'45'));
