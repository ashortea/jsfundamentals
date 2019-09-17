//BOOLEAN: has two possible values of either tue or false

let on = true;
console.log(on);

let off = false;
console.log(off);

//Null: null is an empty value. 

let empty = null;
console.log(empty);

//undefined: no value is assigned and does not act as an empty container

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

// NUMBERS: numbers are just numbers.

let degrees = 85;
console.log(degrees);


let precise = 999999999; // 15 9s
console.log(precise);

let rounded = 9999999999999999; //16 9s
console.log(rounded)

let notQuite = 0.2 + 0.1;
console.log('notQuite');

let a = number('123');
console.log(a);

//Strings: datatypes used to represent text. either wrapped in a single or double quotes

let Stringone = 'single quote';
let stringtwo = "double quote";
console.log(Stringone, stringtwo);

//numbers vs strings

let first = 1050 + 100;
console.log(first)

//Object: objects are used to store many value instead of a signle value
//Object hold key/vlaue pairs

let frodo = {

    race:'hobbit',
    ring: 1,
    cloak: true

};

console.log(frodo);
console.log(typeof frodo);

//ARRAYS: contains that hold a list of items

let burritos = ['large', 4, true];
console.log(burritos);
console.log(typeof burritos);

// addition and concatentaion 

let third = 1050 + '100';
console.log(third);
console.log(typeof third)


let firstName = 'Asia';
let lastName = 'Shorter';
let aptNumber = '914';
let street = '2535 Bandywine Ct';
let city = 'Indianaplolis';
let state= 'IN';
let zipcode = '46241';

console.log(firstName + ''+ lastName +);
console.log(street, aptNumber );

//String Properties
   //properties are quailty associated with a data types
   // strings and numbers both have quailties associated with them, and thier own properties

   let myName = 'Asia';
   console.log(myName.length);//only time javaspcript does not start conunting from 0

   //String methods: methods are tools  that let use maipatate our data
   //.poperties use '.', mthods use '.methods()

   let mynameIs = 'Zach';
   console.log(mynameIs.toUpperCase());

   let sent = 'this sentence will be split into individual parts ';

console.log(sent.split(''))
let newSent = sent.split('')
