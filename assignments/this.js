/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global This; when using this without setting to a parent function it uses the global window, I.E. pic o the forest, when you say this tree it will
continue to look at entire forest.
* 2. Implicit This; This refers to an object passed into a function I.E. creating a hobbit, it would be refering to this 
hobbit specifically.
* 3. New This; This one is for Construction of many objects. I.E. If you needed to create fred and wilma or any other adult characters you would have the 
a new function and the information as an arguement.
* 4. Explicit this; when youre picking exactly what youre binding THIS to. i.e. using a prototype.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// function sayhello (hello) {
//     console.log(this);
//     return hello;
//   }
//   sayhello('hello');
// Principle 2
// const person = {
//     name: 'hondo',
//     age: 22,
//     hobbies: 'climbing',
//     skills: function() {
//         return `I am ${this.name}, and I enjoy ${this.hobbies}`
//     }
// }
// console.log(person.skills());
// code example for Implicit Binding

// Principle 3

// code example for New Binding
// function person(name, hobby) {
//     this.hobby = hobby;
//     this.name = name;
//     this.does = function () {
//         console.log(`${this.name} Likes ${this.hobby}.`);
//     }
// }
// const sam = new person('sam', 'coding');
// console.log(sam);
// sam.does();
// Principle 4

// code example for Explicit Binding
const sam = {
    name: 'sam'
}
const hondo = {
    name: 'hondo'
}
const hskill = ['climbing', 'math'];
const sskill = ['coding', 'guitar'];

function showcase(skill1, skill2) {
    return `Hello my name is ${this.name}. I can ${skill1}, and ${skill2}`;
}

console.log(showcase.call(sam, sskill)); //THIS ONE ISNT WORKING
console.log(showcase.apply(hondo, hskill));