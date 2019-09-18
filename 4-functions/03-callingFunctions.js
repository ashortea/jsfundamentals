function hi(){
    console.log('HI');
}
hi; //nothing
hi(); // See HI 
console.log(hi); //[function:hi]
console.log(hi());//undefined

/*
    -the parentheses after a function IMMEDIATELY invokethe function that's being called
    -we get undefined because we are not retrurning any information from the function 
*/
/////Challenge

// varaible can be invoke before or after function becausei
//it will be hoisted

list();
function list(){
    for (num = 0; num < 11; num++){

        console.log(num);
    }
}

let arr = ['this', 'is', 'really', 'cool'];

function vaules(){
    for (let string of arr){
        console.log(string)
    }
}
vaules();