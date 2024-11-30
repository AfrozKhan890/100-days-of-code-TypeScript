// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.


let grades: number[] = [56, 78, 96, 86, 89, 68];

let total = grades.reduce((total, grade) => total + grade, 0);
let average_grade = total / grades.length;

console.log(average_grade);
