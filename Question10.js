const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout

  });


  r1.question("Please enter a string: ", function(userInput) {
    let string = userInput;
    //execute replaceVowel function
    r1.close();
    
  
    console.log('The input string with first vowel replaced is ' + replaceVowel(string) );




  });

  function replaceVowel(string){
    let regex = /[aeiou]/i

return string.replace(regex, '-');


  }

