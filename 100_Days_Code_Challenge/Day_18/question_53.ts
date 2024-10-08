// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list 
// that shows what a computer programmer knows, like coding languages, tools, and software 
// frameworks. Find a way to get three specific skills from this list and show them.

let developerSkills = {
    languages:["Python", "JavaScript", "PHP"],
    frameworks:["Django","Laravel","React JS"],
    tools:["Git","LinkedIn"]
}

// Getting specific skills from the list
let {languages,frameworks,tools} = developerSkills;

// Showing a skill from each category
console.log(`"Languages: " ${languages[0]}, "Frameworks: " ${frameworks[0]}, "Tools: " ${tools}`);

// Showing all skills from each category
console.log(languages);
