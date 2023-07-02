const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout

  });

  r1.question("Please enter a string: ", function(userInput) {
    let string = userInput;
    //execute sortDescend function
    r1.close();
    result = sortDescend(string);
  
    console.log('The string sorted descending is '+ result );




  });


  function sortDescend(string) {
 
    array = Array.from(string.toLowerCase());
    array.sort((a,b) => { 
     if (a < b) {
        return 1;
     }
     else if (a > b) {
        return -1;
     }
     else {
        return 0;
     }
    
  });
        return array.join('');


  }