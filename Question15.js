const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout

  });

  r1.question("Please enter a string: ", function(userInput) {
    let string = userInput;
    //execute noRepeat function
    r1.close();
    result = nonRepeatCharacters(string);
  
    console.log('The characters of input that dont repeat are '+ result );




  });

  function nonRepeatCharacters(string){
    let charCountMap = {};

    for(let s of string){
        charCountMap[s] = charCountMap[s] ? charCountMap[s] + 1 : 1;

    }

    let array = [];
    for(let char in charCountMap){
        if(charCountMap[char] === 1){
            array.push(char);
        }


    }
    return array;

  }

