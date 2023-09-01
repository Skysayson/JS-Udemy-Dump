function fruitProcessor(apples, oranges) {
    const juice = `Juice mixed with ${apples} apples and ${oranges} oranges`;
    
    return juice;
}

const appleJuice = fruitProcessor(2,3);
console.log(appleJuice);


//Function Declaration can be called before definition
function calcAge1(birthYear) {
    return 2023 - birthYear;
}


//Function Expressions cannot be called before definition
const calcAge2 = function calcAge1(birthYear) {
    return 2023 - birthYear;
}

// console.log(calcAge2(2001));
//Functions are values that can be stored in a varialbe


//Arrow function nice for one liner functions
const calcAge3 = birthYear => 2023 - birthYear;
console.log(calcAge3(2001));

//Arrow function that isn't one liner

const yearsUntilRetirement = (birthYear, firstName) => {
    const age3 = calcAge3(birthYear);
    const retirement = 26 - age3;

    return `${firstName} retires in ${retirement}`;
}


console.log(yearsUntilRetirement(2001, "Sky"));



