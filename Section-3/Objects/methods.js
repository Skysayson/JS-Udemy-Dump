const person = {
    firstName: 'Jonaz',
    lastName: 'Sayson',
    birthYear: 2001,
    job: 'Student',
    friends: ['Lawr', 'Teej', 'Ting'],
    hasLicense: false,

    //Function attached to an object is called a method
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // //this is the object the method is in
    // calcAge: function() {
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return (this.hasLicense == true)? 1:0;
    }
};

const catcher = person.getSummary();

console.log(catcher);

if(catcher === 1) {
    console.log(`${person.firstName} is a ${person.calcAge()}-year old student, and he has a driver's license`);
} else {
    console.log(`${person.firstName} is a ${person.calcAge()}-year old student, and he does not have a driver's license`);
}

//Arrays are also objects hence why they can have methods

// console.log(person.calcAge(person.birthYear));
// console.log(person.calcAge());