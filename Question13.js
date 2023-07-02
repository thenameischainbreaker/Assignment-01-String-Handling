const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout

  });


  r1.question("Please enter a string: ", function(userInput) {
    let string = userInput;
    //execute noRepeat function
    r1.close();
    result = noRepeat(string);
  
    console.log('The input string with no repeated characters is '+ result );




  });

  function noRepeat(string){
    let set = new Set();

    for(let s of string) {
        set.add(s);
    }

    return Array.from(set).join('');






  }
