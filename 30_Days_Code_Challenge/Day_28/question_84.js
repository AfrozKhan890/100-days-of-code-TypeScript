"use strict";
// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances 
// of the word "JavaScript" with "TypeScript".
function convert_JS_with_TS(sentence) {
    return sentence.replace(/Javascript/gi, 'TypeScript');
}
console.log(convert_JS_with_TS('I love JavaScript and javasCRipt is so easy.'));
