
// A value is primitive by default unless it is an object.

/* 

7 Primitive Data Types

-- Most commonly used --

Number: Default floating point numbers -> Used for decimals and integers : let age = 23;

String: Sequence of characters -> Used for text : let firstName = "Jonaz" can either "" or '';

Boolean: Logical type, can only be true or false -> Used for making/taking decisions : let fullAge = true;

-- Most commonly used --

Undefined: A value we declared without assigning a value: let undefined firstName;

NULL: Empty value

Symbol(ES2015): Value that is unique and cannot be changed

Bigint(ES2020): Larger integer than number type cant hold

Javascript has dynamic typing: In Javascript values have type, not the variable

*/

let javascript = true;
console.log(javascript);


// console.log(typeof true);
console.log(typeof javascript);
// console.log(typeof 23);
// console.log(typeof 'Jonaz');

javascript = 'YES';
console.log(typeof javascript);

let year;
// console.log(year);
// console.log(typeof year);

year = 1991;

console.log(year);
console.log(typeof year);

console.log(typeof null); //Should return NULL, typeof(NULL) is not an OBJECT