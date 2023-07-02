const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  r1.question("Please enter a character: ", function(userInput) {
    let character = userInput[0];
    //execute regex test functin in callback
    r1.close();
    console.log("Input is "+ isDigit(character));




  });


  function isDigit(a){
    let regexdigit= /[0-9]/i;
    

    if(regexdigit.test(a)) {
        return 'digit';
    }

    else {
        return 'not digit';
    }


  }
