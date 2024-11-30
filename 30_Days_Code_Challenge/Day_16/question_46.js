"use strict";
// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make,
// model, year, and a method describe() that logs a sentence about the laptop.
let laptop = {
    make: "Lenovo",
    model: "X1 Carbon 12th Gen",
    year: 2024,
    describe() {
        console.log(`This laptop is made by ${this.make}.The model is ${this.model}. The making year of this laptop is ${this.year}.`);
    }
};
laptop.describe();
