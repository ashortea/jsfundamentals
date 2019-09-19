//arrow functions( or fat arrow functions ) were into in ES6.
//They are more consise way of writing fuction expresssions
//  - Not funcion declarations 
        //That means that arrow functions do not get hoisted

let hi = () => {
    console.log('hi');
    //return---block body arrows must have a retrurn in the body of the functuion
}

hi();



//CONCISE BODY
let hi = () => console.log('hi');
//consise body arrow functions return as default
hi();


//CONSISE VS BLOCK
let apples =(x , x) => console.log(`There are ${x} apples.`);
apples(10);

let apples = x => {
    console.log(`There are ${x} apples.`);
}
apples(15);

