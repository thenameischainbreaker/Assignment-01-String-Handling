const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout

  });


  r1.question("Please enter a string: ", function(userInput) {
    let string = userInput;
    //execute deleteSpaces function
    r1.close();
    result = deleteSpaces(string);
  
    console.log('The input string with spaces deleted is '+ result );




  });


  function deleteSpaces(string){
array = Array.from(string);

return array = array.filter(char => char!== ' ').join('');



  }