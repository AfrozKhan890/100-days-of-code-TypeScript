// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.


let Magicians: string[] = ["Harry Houdini", "David Blaine", "Derren Brown", "David Copperfield"];

function copyArray(myArray: string[]): string[] {
    return [...myArray];
}

function make_great(magiciansArray: string[]): string[] {
    // Create a copy of the array to avoid modifying the original
    let modifiedArray = [...magiciansArray];
    for (let i = 0; i < modifiedArray.length; i++) {
        modifiedArray[i] = "The Great " + modifiedArray[i];
    }
    return modifiedArray;
}

function Show_Magicians(magicians: string[]): void {
    magicians.forEach(Element => {
        console.log(Element);
    });
}

const copymagiciansArray = copyArray(Magicians);
const greatMagiciansArray = make_great(copymagiciansArray);

console.log("\n\nThis is my Original Array:");
Show_Magicians(Magicians);

console.log("\n\nThis is my Changeable Array:");
Show_Magicians(greatMagiciansArray);