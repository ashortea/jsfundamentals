function fizzbuzz(){

    for (let x= 0; x <=100; x++){
       // console.log(x)(for loop 0 to 100)
       if (x % 15 === 0){ ////same as ( x % 3 === 0, && x % 5 === 0)
           console.log('fizzbuzz');
       } else if (x % 5 === 0) {
           console.log('fizz');
       } else if (x % 3 === 0){
           console.log('buzz');
       } else{
           console.log(x);
       }
    
    };
}

fizzbuzz();
