const { count } = require('console');
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  r1.question("Please enter a string: ", function(userInput) {
    let string = userInput;
    //execute count vowel and consonant function
    r1.close();
    let result = countVowelandConsonants(string);
    console.log("Input string has " + result.vowels + " vowels and " + result.consonants + " consonants");




  });




  function countVowelandConsonants(string) {
   
    let vowel_regex = /[aeiou]/i
    let consonant_regex = /[bcdfghjklmnpqrstvwxyz]/i
    let vowel_count = 0;
    let consonant_count= 0;

    for(let s of string){
       if (vowel_regex.test(s)) {
        vowel_count++;
       }
       else if(consonant_regex.test(s)){
        consonant_count++;
       }
    }

    return {vowels: vowel_count, consonants: consonant_count};




  }