// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. 
// Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.


let priceSet1:number[] = [5000,8000,10000,30000];
let priceSet2:number[] =[4320,6400,5600,20000];
let priceCombined = [...priceSet1, ...priceSet2].sort((a,b) => a - b);
console.log(priceCombined);
