let person1 = {
    name: 'Mary',
    age: 24,
    canVote: true
}

let person2 = {
    name: 'Jerry',
    age: 15,
    canVote: false
}

let person3 = {
    name: 'Tyler',
    age: 38,
    canVote: true
}

// (1)    (2)           (3)
function Person( name, age, canVote) {
    //(4)  (5)  (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
//            (7)  (8)
let person4 = new Person('James', 80, true)

/*
1. the function keyword
2. the function name. for construction function the name should be capitalize
3. parameter. this will be the value of the oject once we call it from the function 
4. the 'this' keyword gives us the abilty to refer back to whatever called on actived it.
    in the cae 'this ' referd back to' Person'
5. this will be the keyword will be the keyword of the new object we create. this is
    not refering back to the function .
6. this is refering to the parameter we passed through
7 & 8. - the 'new' keyword is calling our Person constructor function, and created 'new Person'

*/