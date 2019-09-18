//Loops offer s a quock and easy way to do something repeatedly, or loop over something.
//Note: there is a danger of infinite loops
/*
-for loops take 3 parameters
1. Initial expression
2.condition
3.increament expression
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i <= 20; i +=2) {
    console.log(i);
}

for (let i = 10 ; i >= 0; i --) {
    console.log(i)
}

for (let i = 0 ; i >= -24; i -=2) {
    console.log(i)
}
////////////////////////
let name = 'Donovan';
/// console.log(name.length)
for (let i = 0; i < name.length; i ++) {
    console.log(name[i])
}

for (let n of name){
    console.log(n);
}

///////////
let sum = 0
for ( let i = 1; i <=50; i++){
    sum += i;
}
console.log(sum)
