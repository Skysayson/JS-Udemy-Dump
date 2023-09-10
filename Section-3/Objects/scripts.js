//Object literal syntax
const sky = ['Lawr', 'Ting', 'Teej'];

const jonaz = {
    friends : sky,
    age : 21,
    sex : 'M',
    wife : 'Angel'
};

// console.log(jonaz.fullName[0]);

const nameKey = 'Name';

// console.log(jonaz['full' + nameKey]);
// console.log(jonaz['full' + nameKey]);

// //does not work with . operator for property name, use brackets for computed property name

// /* When to use . or []
//     If we need to compute for the property name then we have to use [Bracket notation]
//     else use .
// */

// // const interestedIn = prompt('What do you want to show?'); 
// // console.log(jonaz[interestedIn]);

jonaz.location = 'Cebu';
jonaz['instagram'] = '@skysayson';
console.log(jonaz);

console.log(`Jonaz has ${jonaz.friends.length} friends, and his best friend is called ${jonaz.friends[0]}`);

