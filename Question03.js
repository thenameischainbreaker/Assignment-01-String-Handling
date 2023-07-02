const readline = require('readline');
const deepEqual = require('deep-equal');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  r1.question("Please enter 2 strings in a comma delimited array :", function(userInput) {
    let [string1, string2] = JSON.parse(userInput);
    r1.close();
    //execute isAnagram function in callback
   console.log("The 2 strings are " + (isAnagram(string1,string2) ? "" : "not ") + "anagrams");
    


  });


  function isAnagram(str1, str2){
    let charCountMap1 = {};
    let charCountMap2 = {};
    for (let char of str1) {
        charCountMap1[char] = (charCountMap1[char] ? charCountMap1[char] + 1 : 1);
      }

      for (let char of str2) {
        charCountMap2[char] = (charCountMap2[char] ? charCountMap2[char] + 1 : 1);
      }

      return deepEqual(charCountMap1,charCountMap2);



  }