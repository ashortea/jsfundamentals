/*let lock = {
    key:''
};*/

let food = ['pecan pie', 'shrimp', 'quesdilla', 'cheese cake', 'hotdog'];

for (foodItem of food){
    console.log(foodItem);
}

food.push('Pizza');// appends pizza to the end of the array
console.log(`push:`, food)

food.slice(1,1, 'bananas');//removes shrimps and adds bananas-->(index, how many values to cut what to add in that location)
console.log(`slice:`, food);

food.slice(2, 0, 'sweet potato pie');// adds sweet potato pie to the position 2 but does not remove anything.
console.log(`slice 2:`, food);

food.pop();// removes last item of array
console.log(`pop:`, food);

food.shift();// removes first items
console.log(`shift`, food);

food.unshift('popcorn', 'steak',);//adds items to begining of array
console.log(`unshift`, food);