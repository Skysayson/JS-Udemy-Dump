//Type conversion
const inputYear = 1991;
console.log(String(inputYear));

//Type coercion
console.log("I am " + 23 + " years old");
//Javascript will automatically convert the number into a string
console.log("22" - "21");
//Convert string to number due to the operator being used

let n = "1" + 1;
n = n - 1;
console.log(n);
//1 becomes a string there for concatenating and becoming "11" then subtracting by one it converts it into a number hence why answer is 10
//if + number becomes string if - String becomes number

const age = Number("18");

// if(age === "18") {
//     console.log("It's a string");
// } else {
//     console.log("It's a number")
// }


if(age == 18) {
    console.log("black");
    console.log(typeof(age));
} else {
    console.log(typeof(age));
}

