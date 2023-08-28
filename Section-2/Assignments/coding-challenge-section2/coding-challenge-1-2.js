//Test data 1: markweight 78kg, markheight 1.69
//Test data 1: johnweight 92kg, johnheight 1.95
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);


console.log("This is Marks' BMI" +" "+markBMI);
console.log("This is Johns' BMI" +" "+johnBMI);

if(markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${JohnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}
//String literal

//Test data 1 results: Mark BMI-27.309, John BMI-24.194
//Test data 2 results: Mark BMI-26.87 , John BMI-27.44