/*
-switch statmenets xectute a bloock of cose depending on diiferenent case
-switch statemenets are often used together with break or default keywords
    -break keywods breakout of the stich block alltogether
        -default keywords specifies code to run if there is no case to match
*/

let officeCharacter = 'Michael'

switch (officeCharacter){
case 'Michael':
    console.log('My mind is going a mile a hour');
    break;
    case 'Dwight':
        console.log('i am fast.to give you a referanace, i am somewhere between a snake and a mongose...And a panther');
        break;
        case 'Jim':
            console.log(' Bears , beets. BG');
            break;
            default: 
            console.log('i am sorry,' $(officeCharacter),' but do i know you?');

}

//////////////////////////////////////

let dessert = 'pie'

switch (dessert){
case 'pie':
    console.log('Pie, pie, me oh my!');
    break;
    case 'cake':
        console.log('Cake is great!');
        break;
        case 'ice cream':
            console.log('I scream for ice cream!');
            break;
            default: 
            console.log('Not on the menu');


}
/////////Swich statement with multi condictions

let num = -40;

switch (true) {
    case (num <0 && num > -10):
        console.log('case 1 ran')
        break;
        case (num > 0):
            console.log('case 2 ran')
            break;
            default:
                console.log('did not work')
}