const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout

  });


  r1.question("Please enter a string: ", function(userInput) {
    let string = userInput;
    //execute countCharTypes function
    r1.close();
    result = countCharTypes(string);
  
    console.log('The input string has ' + result.digit + ' digits ' + 
    result.alpha + ' alphas and ' + result.special + ' special characters' );




  });


  function countCharTypes(string) {
    alpharegex = /[a-z]/i
    digitregex = /[0-9]/i
    let alphacount = 0;
    let digitcount = 0;
    let specialcount = 0;

    for(let s of string){
        if(alpharegex.test(s)) {
            alphacount++;
        }
        else if(digitregex.test(s)) {
            digitcount++;
        }
        else {
            specialcount++;
        }
    }
return {alpha: alphacount, digit: digitcount, special: specialcount };



  }
