const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout

  });


  r1.question("Please enter a string: ", function(userInput) {
    let string = userInput;
    //execute noRepeat function
    r1.close();
    result = calculateSum(string);
  
    console.log('The sum of integers in the input string is '+ result );




  });

  function calculateSum(string){

let array = Array.from(string);
return array.reduce((accumulator, currentValue) =>  +accumulator + +currentValue
);



  }
