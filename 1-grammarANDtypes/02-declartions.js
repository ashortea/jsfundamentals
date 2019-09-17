// varibles ar ethe main contaciners for storing data value
//We use varibles so that we can refer back to them later

let     a   =   2;
/* (1) (2) (3) (4) 

1- varible javascript keyword
2- varible name
3- assignment operator
4- varible value
*/

let hello
let Hello //case sensative 

let myname// 

/*
    notes on variables:
        - a variable name must begin with a letter, underscore, or dollar sign
        - numbers may follow the above characters, but cannot come first
        - javascript is case sensitive - 'hello' and 'Hello' are different variables
        - no spaces are allowed in variable names
        - camelCase is the best practice for naming variables.
        - this is good practice because it helps keep variables readable--  let myName = 'Zach';
*/

/*
        var, let, const:

        -var: 'old' key word for varibles. wont use often.
        -let:'new' keyword for varibles. intro in es6
        -const: declares an unchangeble varible
*/

// Declartions: left side of varable 
// initialiation: right of varible

let x;
console.log('Declaraction', x)

x = 10;
console.log('Intitization:', x)

x = 33;
console.log('reinitization', x)

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let today = 'Great!'
const elevenFifty = 'wonterful!'
console.log(today, elevenFifty)

today= 'lovely'
console.log(today, elevenFifty)

elevenFifty='super'
console.log(today, elevenFifty)
