// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to 
// uppercase, then to lowercase, and logs both.

function convertCase(str:string){
    let originalCase = str;
    let upperCase = str.toUpperCase();
    let lowerCase = str.toLowerCase();
    console.log('Original Case: ' + originalCase + '\nUpperCase: '+ upperCase + '\nLowerCase: '+ lowerCase);
}

convertCase('pAkisTan');