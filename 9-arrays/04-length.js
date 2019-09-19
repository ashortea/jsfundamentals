let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length); //length is the only thing that does not start conting form 0

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(color.length);
console.log(color.toString());

console.log(typeof colors);

//////CHALLENGE

let arr = [1, 2, 3, 4, 5];
console.log(arr instanceof Array);/// check if array

//or
//fat arrow function 
if(arr instanceof Array === true){///check if array
    let revArr = arr.reverse();
    revArr.forEach( num => console.log(num));}

    ////

    ​
    // regular function
    if (arr instanceof Array === true) {
        let revArr = arr.reverse();
        revArr.forEach(function(num){
            console.log(num);
        });
    }
    
arr.reverse();
console.log(arr);
