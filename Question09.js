
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout

  });
  let message = `This is a
multiline
string.`;

  r1.question("Please enter a string: ", function(userInput) {
    let string = userInput;
    //execute highestCount function
    r1.close();
    let result = highestCount(string);
  
    console.log('The highest frequency count is ' + result.biggest_count + ' and \n' +
    'the highest frequency character(s) are ' + result.biggest_count_chars );




  });



  function highestCount(string) {
    let charCountMap = {};


    for(let s of string){
       // charCountMap[s] = (charCountMap[s] ? charCountMap[s] + 1 : 1);
       charCountMap[s] = (charCountMap[s] ? charCountMap[s] + 1 : 1);
}

let biggest_count = 0;
let biggest_count_chars = [];
for (let char in charCountMap) {
 if(charCountMap[char] > biggest_count ) {
    biggest_count_chars = [];
    biggest_count_chars.push(char);
    biggest_count = charCountMap[char];
 }
else if(charCountMap[char] == biggest_count ) {
    biggest_count_chars.push(char);
}

}

return {biggest_count: biggest_count, biggest_count_chars: biggest_count_chars};

  }