// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN 
// (Not a Number) and return a boolean result.

function valueNaN(value:any):boolean{
    return isNaN(value);
}

console.log(valueNaN('Afroz Khan')); //Output:true,because 'Afroz Khan is not a number.'
console.log(valueNaN(321)); //Output:False,because '321 is  a number.'
console.log(valueNaN(321.32));  //Output:False,because '321.32 is  a float value.'


