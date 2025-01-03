
// Question 63:Shape Shifter: Write a program that can describe either a circle or a rectangle 
// using a special type alias, including properties unique to each shape.


type Shape = {
    kind:"circle" | "rectangle" | "square" 
    radius?:number,
    width?:number,
    height?:number,
}

// Describing a circle using our Shape type
let circle:Shape = {
    kind:"circle",
    radius:40
}

// Describing a rectangle using our Shape type
let rectangle:Shape = {
    kind:"rectangle",
    width: 20,
    height:10
}

// Describing a square using our Shape type
let square:Shape = {
    kind:"square",
    width:10,
    height:10
}
// Result
console.log(circle); // circle
console.log(rectangle); // rectangle
console.log(square); // square

