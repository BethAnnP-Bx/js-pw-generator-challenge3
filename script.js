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

// Assignment code here

// PW Criteria
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numEric = "0123456789";
var symBols = "!$%&'()*+,-./:;<=>?@[]^_`{|}~";
var uniquePw = "";

var validateLow;
var validateUpp;
var validateNum;
var validateSym;
var validateLen;

// Directions Alerts and Prompts
function generatePassword() {
  var uniquePw = parseInt(
    prompt(
      "Choose the length of your unique password. Input a number between 8-128 for number of characters."
    )
  );
}

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
