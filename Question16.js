const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout

  });

  r1.question("Please enter a string: ", function(userInput) {
    let string = userInput;
    //execute sortAscend function
    r1.close();
    result = sortAscend(string);
  
    console.log('The string sorted ascending is '+ result );




  });


  function sortAscend(string) {
 
    array = Array.from(string);
    array.sort();
    return array.join('');


  }