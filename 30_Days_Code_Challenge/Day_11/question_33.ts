// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

let numbers:number[] = [1,2,3,4,5,6,7,8,9];

numbers.forEach(number => {
    let suffixes = 'th';
    if (number == 1) {
        suffixes = 'st';
    }
    else if (number == 2) {
        suffixes = 'nd';
    }
    else if (number == 3) {
        suffixes = 'rd';
    }
    console.log(`${number}${suffixes}`); 
});

