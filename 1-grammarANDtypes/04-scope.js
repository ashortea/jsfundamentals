// scope is how a computer kepps track of all the variables in a program

// var vs let

// Var ex.
var x = 12;
function varTest(){
    var x = 33
    if (1 == 1){
        var x = 45;
        console.log(x);
    }
    console.log(x);
}
varTest();
console.log(x);

//let example
let x = 12;

function letTest(){
    var x = 33;
    if (true) {
        let x = 45;
        console.log(x);
    }
    console.log(x);
}
letTest();
console.log(x);

//const example

const scope = 1;
if(true) {
    const scope = 2;
    console.log(scope);
}
