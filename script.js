// Pseudo-code starts here
// pw criteria is in this order per the acceptance criteria: Length of pw, lowercase, uppercase, numeric, special characters

// Prompt "Choose the length of your unique password. Input a number between 8-128 for number of characters."
// If length is outside of 8-128 characters Alert "Do enter a number between 8-128."
// Alert to validate "Your unique password will be this number of characters."

// Prompt "Do you want lowercase letters in your unique password?"
// Alert to validate with either "Your unique password will include or not include lowercase letters."

// Prompt "Do you want uppercase letters in your unique password?"
// Alert to validate with either "Your unique password will include or not include uppercase letters."

// Prompt "Do you want numbers in your unique password?"
// Alert to validate with either "Your unique password will include or not include numbers."

// Prompt "Do you want special characters in your unique password?"
// Alert to validate with either "Your unique password will include or not include special characters."

// Unique password is written to the page within the card-body placeholder.

// Use for loop, Math.floor, Math.random
// Pseudo-code ends here

// Assignment Code here
// PW Criteria
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numEric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var symBols = ["!", "&", "%", "@", "*", "+", "-", ".", "/", "<", ">", "?", "~"];

//var uniquePwlength = "";
//var genPwset = "";
//var uniquePwset = "";

var validateLow;
var validateUpp;
var validateNum;
var validateSym;
var validateLength = "";

// Directions and functions with alerts and prompts
function generatePassword() {
  var validateLength = prompt(
    "Choose the length of your unique password. Input a number between 8-128 for number of characters."
  );
}
//while (validateLength <= 7 && validateLength >= 128) {
//alert("Do enter a number between 8-128.");
//var validateLength = (prompt(
//  "Choose the length of your unique password. Input a number between 8-128 for number of characters."
//  ));
//}

//for (var i = 0; i < validateLength; i++) {
//genPwset = genPwset +

//function uniquePwset() {
//var validateLow = confirm(
//"Do you want lowercase letters in your unique password?"

//; {
//");

//   var validateUpp = confirm(
//    "Do you want uppercase letters in your unique password?");

//   var validateNum = confirm(
//     "Do you want numbers in your unique password?");

//   var validateSym = confirm(
//     "Do you want symbols in your unique password?");

//   console.log(validateLow);
//   console.log(validateUpp);
//   console.log(validateNum);
//   console.log(validateSym);

// If (validateLow === true); {
//   uniquePwset = uniquePwset + validateLow;
// }
// If (validateUpp === true); {
//   uniquePwset = uniquePwset + validateUpp;
// }
// If (validateNum === true); {
//   uniquePwset = uniquePwset + validateNum;
// }
// If (validateSym === true); {
//   uniquePwset = uniquePwset + validateSym;
// }
// console.log(uniquePwset);

// for (var i = 0; i < uniquePwlength; i++) {
//   var value = Math.floor(Math.random() * uniquePwset.length);
//   uniquePwset = uniquePwset + uniquePwset[value];
// }

// return uniquePwset

// } else {
//   alert("Do enter a number between 8-128.");
//  writePassword();
// }

// //var validateLow;

// var validateNum;
//    {
//   //var pickLowercase = lowerCase.charAt(Math.floor(Math.random() *  );
//   document.getElementById("password").innerHTML = pickLowercase;
// //}

// function genUpper() {}

// function genNumeric() {}

// function genSymbol() {}
// Math.floor(Math.random);

//if (uniquePwlength < 8) {
//  alert("Do enter a number between 8-128.");
//} else if (uniquePwlength > 128) {
//  alert("Do enter a number between 8-128.");
//

//r input of a number <= 7 or >= 128

// if user selects cancel or input of a number <= 7 or >= 128, then alert.
//if (uniquePwlength === Cancel) {
//alert("Do enter a number between 8-128.");

//alert("Do enter a number between 8-128.");
//alert("Your unique password will be this number of characters.");
//prompt ("Do you want lowercase letters in your unique password?");
//alert ("Your unique password will include lowercase letters.");
//alert ("Your unique password will not include lowercase letters.");
//prompt ("Do you want uppercase letters in your unique password?");
//alert ("Your unique password will include uppercase letters.");
//alert ("Your unique password will not include uppercase letters.");
//prompt ("Do you want numbers in your unique password?");
//alert ("Your unique password will include numbers.");
//alert ("Your unique password will not include numbers.");
//prompt ("Do you want special characters in your unique password?");
//alert ("Your unique password will include special characters.)";
//alert (("Your unique password will include special characters.)";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
