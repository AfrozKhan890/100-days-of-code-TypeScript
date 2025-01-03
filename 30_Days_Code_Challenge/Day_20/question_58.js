"use strict";
// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function averageScore(...scores) {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(averageScore(54, 76, 98, 43, 76));
