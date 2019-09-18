
///Switch
let FB = 25;

switch(true) {

case (FB % 3 === 0 && FB % 5 === 0):
console.log('Fizz');
break;
case (FB % 5 === 0):
    console.log('Buzz');
    break;
    case (FB % 3 === 0): 
    console.log('Fizz Buzz');
    break;
default: 
console.log(FB)

}

// Else If
let FB = 15;

if (FB % 3 === 0 && FB % 5 === 0) {
    console.log('Fizz Bizz');
} else if (FB % 5 === 0) {
console.log('Buzz')
}  else if (FB % 3 === 0){
    console.log('fizz')
}

//Terrary

let FB = 30;

(FB % 3 === 0 && FB % 5 === 0) ? console.log('Fizz Buzz')
: (FB % 5 === 0) ? console.log('Buzz')
: (FB % 3 === 0) ? console.log('Fizz')
:  console.log(FB)