/*how can we interate over an array?
    -for of loop
    - for loop
    -forEach() method


*/

let food = ['pecan pie', 'shrimp', 'quesdilla', 'cheese cake', 'hotdog'];

// for (let i = 0; i <food.length; i++){
//     console.log(food[i])
// }

food.forEach(foodItem =>{
    console.log(foodItem);
})

food.forEach((foodItem, index) => {
    console.log(foodItem);
    console.log(index);///2nd parameter will alway index the items
})


////////////////////////

let movies = ['Lost in Space', 'Star Wars', 'Spirt Away', 'Back to the Future', 'Cars'];

movies.forEach(moviesList => {
    console.log(moviesList);
})

movies.push(' All Dogs go to Heaven');
movies.slice(1, 1,'Flubber');

console.log(function(movies));


