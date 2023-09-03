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
const Sky = [`Jonaz Juan`,`Sayson`, friends];
console.log(Sky + " " +`The length of the array is ${Sky.length}`);