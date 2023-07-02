
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  r1.question("Please enter a character: ", function(userInput) {
    let character = userInput;
    //execute regex test functin in callback
    r1.close();
    console.log("Input is "+ vowelOrConsonant(character));




  });


  function vowelOrConsonant(a){
    let regexconsonant = /[bcdfghjklmnpqrstvwxyz]/i;
    let regexvowel = /[aeiou]/i

    if(regexconsonant.test(a)) {
        return 'consonant';
    }
    else if(regexvowel.test(a)){
        return 'vowel';
    }
    else {
        return 'not a letter';
    }


  }
