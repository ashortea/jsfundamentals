/*
falsy values: a faley is a vale that is considereed false when encountered in booolean context
-there are 6 falsy vlaue in javascript
1. false
2.0
3. "", '', ``
4. null
5.underfined
6. NaN(not a number)

*/

let isOn = true;

if (isOn == true){
    console.log('the light is on')
}

if (isOn){

    console.log('light is on')
}

let isOn = false;

if (isOn == false){
    console.log('light is off');
}


let weather = 79;

if (weather < 65){
    console.log('wear a jacket');
}