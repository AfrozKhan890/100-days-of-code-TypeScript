// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the 
// remainder. Use an object to return both values.

function remainder_and_divide(numerator:number, denominator:number):{
    quotient:number; remainder:number
        }
        {
        let quotient = Math.floor(numerator/denominator);
        let remainder = numerator % denominator;
        return {quotient,remainder}
}

console.log(remainder_and_divide(10,4));
