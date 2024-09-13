"use strict";
function make_car(manufacture, year, price, ...moreInfo) {
    let Car = { manufacture, year, price };
    moreInfo.forEach(([key, value]) => Car[key] = value);
    return Car;
}
let Car = make_car("Ford", 2023, "$400000", ["features", "Power window"]);
console.log(Car);
