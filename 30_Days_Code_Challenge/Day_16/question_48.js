"use strict";
// let pricesSet1 = [1200, 1500, 1100];
// let pricesSet2 = [1000, 1300, 1600];
// let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
// console.log(combinedPrices);
let priceSet1 = [5000, 8000, 10000, 30000];
let priceSet2 = [4320, 6400, 5600, 20000];
let priceCombined = [...priceSet1, ...priceSet2].sort((a, b) => b - a);
console.log(priceCombined);
