"use strict";
// Question 81: Iterating Over Object Properties: Write a function that takes an object as an 
// argument and logs all of its properties and values.
function OverObjectProperties(obj) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}
OverObjectProperties({ make: 'Suzuki', model: 'Ciaz', year: '2023' });
