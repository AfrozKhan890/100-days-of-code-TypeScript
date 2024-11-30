// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties 
// make, model, and year, use array destructuring to assign the first and second laptops to variables. 
// Then, log these variables.

let laptops = [
    {make:"Lenovo", model:"X1 Carbon 12th Gen", year:2024},
    {make:"Dell", model:"Dell XPS 15", year:2021},
    {make:"HP", model:"HP Spectre x360 14", year: 2023}
];

let [laptop1,laptop2,laptop3] = laptops;
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);