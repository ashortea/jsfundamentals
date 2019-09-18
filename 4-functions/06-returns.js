let hi = () => {
    // (1)
    return 'hi';
}
//   (2)       (3)
let greeting = hi();
console.log(greeting);
/**
1. keyword that brings data form inside the local scope of a function to the outside of a function
2. declare a new variable to hold the value of the retrun
3. when called on 'invoked' the function return becomes the valuse of our greeting 

 */

 function capitalizeName(name) {
     let capName ='';
     for (let l in name){
         if(l == 0){
             capName += name[l].toUpperCase();
         } else {
             capName += name[l].toLowerCase();
         }
     }
    // console.log(capName);
     return capName;
 }

 const myName = capitalizeName('zAcHArY');
 const jessicasName = capitalizeName('jeSSica');
 console.log(myName + ', how are you doing today?');
 console.log(`${jessicasName} ,how are you doing today?`)

 //////////////////////Challenege 

 function tipCalculator(bill){
    let tip = bill * 0.2;
    return tip.toFixed(2) //toFix() is the number of digits after a decimal
    
 }

 let totalTip = tipCalculator(19.88);
 console.log(totalTip);

