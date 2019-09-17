//act a  short cut for writig if/else statemntents

let num = 6;

//terrary

(num > 0) ? console.log('yes it is') : console.log('no it isnt');
//(1)  (2)                              (3)
/*
1.parens act as our if. check if the statemnt elalates as true
2. if true run what is after question mark
3. colon acts as our else/ catch all statement 

*/

if (num > 0){
    console.log('yes it is')
} else {
    console.log('no it isnt')
}


let num = 6;

(num == 0) ? console.log('hello') : (num < 0) ? console.log('hi') : console.log('goodbye')

// can break up statemnt in to muit line after before colon.

(num == 0) ? console.log('hello') 
    : (num < 0) ? console.log('hi') 
    : console.log('goodbye')

    //////////////////////////CHALLENGE

let age = 26;

    (age >= 25) ? console.log('yay you can drive a car') 
    : (age >= 21) ? console.log('yay you can drink') 
    : (age >= 18) ? console.log(' yay you can vote')
    : console.log('sorry you are too young')

