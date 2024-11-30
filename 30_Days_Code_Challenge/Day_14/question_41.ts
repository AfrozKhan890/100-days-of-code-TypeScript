// Question 41: Magicians: Display magician names from an array.

let magicians:string[] = ["Harry Houdini","David Blaine","Derren Brown","David Copperfield"]

// Add function to display a list of magicians with using foreach loop
function Show_Magician(magicians:string[]) {
    magicians.forEach(magician =>{
        console.log(magician);
    })
}

Show_Magician(magicians)



// Add function to display a list of magicians without using any loop

function Display_Magicians(magicians:string[]) {
        console.log(magicians);
    }

Display_Magicians(magicians)