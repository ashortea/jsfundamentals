//arrays are contaiers that hold a list of items
// denoted by []
// they hold mutiple datattypes

let list = ['organg', 'banana', 'oreos'];
console.log(list[1]);

//to dig into an array we can us square bracket notation that contains the index number that we want to refer to

let student = ['tony', 'marshall', 'ryan', 23, true, ['Rhys', 'Iesha', 'Amira']]

console.log(typeof student); //object
console.log(student instanceof Array); //true--> instanceof operator is used to check the type of an object
//at run time, Arrays are techially 'obejcts'

console.log(student[1]);
console.log(student[2]);

///////////////////


let student = ['tony', 'marshall', 'ryan', 23, true, ['Rhys', 'Iesha', 'Amira']]

console.log(` hello`, student[6][2], `you look nice today`);
//or
let name = student[6][2];
console.log(`hello ${name}, you look nice today`);
