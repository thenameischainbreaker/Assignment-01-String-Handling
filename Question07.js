const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  r1.question("Please enter a string: ", function(userInput) {
    let string = userInput;
    //execute delete vowels functin in callback
    r1.close();
    console.log("String with deleted vowels: "+ deleteVowels(string));




  });

  function deleteVowels(string){
    regex = /[aeiou]/i

    array = Array.from(string);

    array = array.filter(char => !(regex.test(char)));

    return array.join('');

    




  }
