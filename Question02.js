const readline = require('readline');


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  r1.question("Please enter a string and a character in a comma delimited array :", function(userInput) {
    let [string, char] = JSON.parse(userInput);
    r1.close();
    //execute isAnagram function in callback
   console.log("The number of occurences of the character in input is " + countCharacter(string, char));
    


  });

  function countCharacter(string, char){
    let count = 0;
    for(let c of string) {
        if(c===char){
            count++;
        }


    }
    return count;



  }