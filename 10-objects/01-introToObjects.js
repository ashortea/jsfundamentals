/*
    -Objects store enumberale properties in the  key/value pair format
    -denote by {}
*/

let testObj = {
key:'value',
key2: 'value',
key3: 'value',

}


let netflix ={ 
    id: 1,
    name: 'the Office',
    season1: {
        episodeInfo:[{
            episode: 1,
            episodeName: 'Pilot'
        }, {
            episode: 2,
            episodeName: 'Diversity Day'
        }, 
        {
            episode: 3,
            episodeName: 'Health Care'
        }, {
            episode: 4,
            episodeName: 'The Alliance'
        }, {
            episode: 5,
            episodeName: 'Basketball'
        }, {
            episode: 6,
            episodeName: 'Hot Girl'
        }
    ]
    },
    season2:{},
    season3:{}
}

/*
    -where arrays use bracket notiation() []), objects use what is called a dot notateion (.)
*/

// console.log("All Data:", netflix);
// console.log("Season Info:", netflix.season1.episodeInfo);
console.log("Specific Episode Name:", netflix.season1.episodeInfo[3].episodeName);

console.log(`episode number: ${netflix.season1.episodeInfo[4].episode}`, netflix.season1.episodeInfo[5].episodeName)


/*
 -JSON stands for Javascript object notation
 -the JSON syntax is derived from javascript object notation syntax, but the JSON format is text only
 -Jason exist as a string - useful when we want to fetch data from a server. it need to be converted from regular javascript

 */

 let spaceJam ={
     tonnSquad: {
         human: 'Michael Jordan',
         rabbit1: 'Bug Bunny',
         rabbit2: 'Lola Bunny',
         duck: 'Daffy Duck',
         tDevil: 'Tasmanian Devil',
         bird: 'Tweety',
         cat: 'Sylvester',
         pig: 'Porky Pig'
     },
     monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'

     },
     nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkKnicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }


 }
//obect.keys & object.values
//  console.log(Object.keys(spaceJam.tonnSquad));
//  console.log(Object.keys(spaceJam.tonnSquad.duck));//gives the index of the string 'Daffy Duck'
//  console.log(Object.keys(spaceJam.tonnSquad).toString());
 console.log(Object.values(spaceJam.tonnSquad))

 /*
    -Object Bracket Notation 
        -object bracket notation also alows us to parse through a object ad pull out specific
        infomation
        -useful if we want to store a key from an object in a variable
        -all keys in an object are strings- which is why this will work
 */

 let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
 }

 //keys in an object are strings 
 let test = Object.keys(garden);
 console.log(test);
 console.log(typeof test[0])
 //stanard dot notation 
 console.log(garden.vegetable); 

 //object braket notation 
let zucchini= garden['vegetable'];// we can access kes in an object byy speifing the name of the object followed by the key we want to grab in the breaket 
// the key name we pass into the object need to be a string (wrapped i quotes) becase all keys are stings
console.log(zucchini);

let baking = {};
baking ['zucchini'] = 'better make some bread!'// setting a key/value pair in an object bracket notation
console.log(baking);

console.log(baking[garden['vegetable']]);//--> same as baking['zucchini']
//using object bracket notaion is a good idea when you may not be able to use dot notation to dig throgh an object

let testObj = {
    "Spaces Here": true,
    noSpaces: true
}

console.log(testObj.noSpaces);
console.log(testObj['Spaces Here']);