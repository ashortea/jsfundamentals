//FOR OF LOOPS are use for objects

//great for interating over value i an object. Properties in an object are called 'enumberalble'
// for in loops interate over an object enumerable properties

let student = {
    name: 'Peter',
    awesome: true,
    degree: 'Javascript',
    week: 1,
};
for (let item in student){
    console.log(item);//logs item names
    console.log(student[item]);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'main coon', 'rag doll'];
for (cat in catArray){
    console.log(cat)//number of string
    console.log(catArray[cat]);
}

let name = 'doNoVaN'
let capName;
for(let n in name){
    //console.log(n);
    if(n == 0){
        capName = name[n].toUpperCase();
    } else{
        capName += name[n].toLowerCase();
    }
}
console.log(capName)