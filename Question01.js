const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  r1.question("Please enter a string and then a character as strings in a comma delimited array :", function(userInput) {
    let [string, character] = JSON.parse(userInput);
    r1.close();
    //execute deleteChar function in callback
   console.log("The new string is " + deleteChar(string,character));

   


  });

  function deleteChar(string, character){
    let array = string.split('');
    array = array.filter(char => char !== character);
    return array.join('');


  }
