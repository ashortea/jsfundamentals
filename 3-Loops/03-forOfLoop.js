//FOR 

//loop over interable properties
//interable meaning able to 'prase' through with numbers

//we can not use a for loop with an obect because object do not have an index
//or interables properties
//-objects are enumberable
let student = {
    name: 'Peter',
    awesome: true,
    degree: 'Javascript',
    week: 1,
};
for (let item of student){//changed to 'of'
    console.log(item);//logs item names
    console.log(student[item]);
}

////


let dogArray = ['husky', 'german shepard', 'pug', 'border collie', 'chihuahua'];
for (dog of dogArray){
    console.log(dog,'goes bark');
}