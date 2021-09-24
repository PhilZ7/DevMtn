// Phil's Password Validator //

// Write a program that does the following:
// Welcome the user to the password validator tool
// Prompt the user for a password to validate
// Check if the user’s password meets the following constraint:
// At least 10 characters long
// If the user’s password meets the constraint, show a success message to the user If the user’s password fails 
// the constraint, show a failure message to the user

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("You are inside the terminal, try the correct password combination and you can read the book.", function(input) {
  if(input.length < 10) {
    console.log(`
         ,..........   ..........,
     ,..,'          '.'          ',..,
    ,' ,'    You     :            ', ',
   ,' ,'     Are     :    Out      ', ',
  ,' ,'              :              ', ',
 ,' ,'............., : ,.............', ',
,'  '............   '.'   ............'  ',
 '''''''''''''''''';''';''''''''''''''''''
                    '''`);
    console.log("The password you tried is not long enough!");
  } else {
    console.log(`
         ,..........   ..........,
     ,..,'          '.'          ',..,
    ,' ,'    You     :            ', ',
   ,' ,'     Are     :     In      ', ',
  ,' ,'              :              ', ',
 ,' ,'............., : ,.............', ',
,'  '............   '.'   ............'  ',
 '''''''''''''''''';''';''''''''''''''''''
                    '''`);
    console.log("The password you entered is correct, you may read the book!");
  }

  reader.close();
});