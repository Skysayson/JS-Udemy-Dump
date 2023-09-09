const friends = ["Michael","Steven","Peter"];
//console.log(friends);
//Normal way to make array

const years = new Array(2001,2021,2009);
//console.log(years);
//One way to make a new Array

//console.log(friends.length);
//Get lengths of array
//console.log(friends[friends.length - 1]);

//Primitive values are immutable, an arrays is not a primitive value
//Can't change entire array
//console.log(friends);

//In javascript an array can hold multiple types even other arrays
const Sky = [`Jonaz Juan`,`Sayson`];
// console.log(Sky + " " +`The length of the array is ${Sky.length}`);

//Pushes into the end of the array
Sky.push('Angel');
console.log(Sky);

//Puts element in to the beginning of the array
Sky.unshift('Lawr');
console.log(Sky);

//Remove and returns last element of the array;
const popped = Sky.pop();
console.log(popped);

//Remove and return first element of the array
Sky.shift();
console.log(Sky);

console.log(Sky.indexOf('Sayson'));


//ES6 method of indexOf, returns true else false if element is in the array
//No type coercion
console.log(Sky.includes("Sayson"));

const newNum = JSON.parse("23");
Sky.push(newNum);
console.log(Sky);

console.log(Sky.includes(23));