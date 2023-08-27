const now = 2023;
const skyAge = 22;
const angelAge = 19;
//Assignment precedence is right to left of 3, lower number = lower percedence and vice versa for higher

console.log(now - skyAge > now - angelAge);
// Javascript has a well defined operator precedence, check javascript documentations

let x, y;
// Multiple declaration

x = y = 10 - 5;
console.log(x, y);

// y gets assigned 10 - 5, x is assigned the value of y, hence right to left

const average = (skyAge + angelAge) / 2;
console.log(average);

// grouping operator precedence test

