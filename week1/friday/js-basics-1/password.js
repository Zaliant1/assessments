const { strictEqual } = require("assert");
const { read } = require("fs");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("welcome to the password validator tool");

reader.question("give math equation separated by spaces ", (pass) => {
  let lengthOfPassword = pass.length;

  // we check if the index cycling finds an uppercase
  for (let i = 0; i < lengthOfPassword; i++) {
    if (pass[i] === pass[i].toUpperCase()) {
      console.log("password contains 1 uppercase");

      break;
      // else we wait til i indexes all of the characters to then give an exception to not bombard console log
    } else if (i === lengthOfPassword - 1) {
      console.log("password must contain at least 1 uppercase letter");
    }
  }

  // we check if the password length is good
  if (lengthOfPassword < 10) {
    console.log("password must contain at least 10 characters");
  } else {
    console.log("password contains 10 characters");
  }

  reader.close();
});

// could not figure this one out
// console.log(`
//       ___                       \n
//      /\__\          ___         \n
//     /:/  /         /\  \        \n
//    /:/__/          \:\  \       \n
//   /::\  \ ___      /::\__\      \n
//  /:/\:\  /\__\  __/:/\/__/      \n
//  \/__\:\/:/  / /\/:/  /         \n
//       \::/  /  \::/__/          \n
//       /:/  /    \:\__\`         \n
//      /:/  /      \/__/          \n
//      \/__/                `);
