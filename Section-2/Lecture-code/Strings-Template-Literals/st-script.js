const firstName = "Jonaz Juan";
const job = "Software engineer";
const birthYear = 2001;
const year = 2023;


const intro = "I'm"+ " " + firstName + " " + "and I'm a" + " " + job + " " +"I am" + " " + (year - birthYear) + " " + "years old";
console.log(intro);
//Creating a string without template literals;



const introNew = `I'm ${firstName} and I'm a ${job} I am ${(year-birthYear)} years old`;
console.log(introNew);
//String made with template literals, introduced with ES6 

console.log(`Works with everything \n\
multiple \n\
lines`);
//Works with regular strings, \n\ able to add multiple lines


