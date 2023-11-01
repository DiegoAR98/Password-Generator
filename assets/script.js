// Assignment code here

// Convert string into an array
var nums = "0123456789".split("");
var special = "!%&,.*+-./<>?~".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Generate Password function
function generatePassword() {
  var passwordLength = prompt("Choose password length (8-50):");

  while (passwordLength < 8 || passwordLength > 50) {
    alert("Password length must be between 8-50 characters. Try again.");
    passwordLength = prompt("Choose password length (8-50):");
  }

  var includeSpecialCharacters = confirm("Click OK to include special characters.");
  var includeNumbers = confirm("Click OK to include numeric characters.");
  var includeLowerCase = confirm("Click OK to include lowercase characters.");
  var includeUpperCase = confirm("Click OK to include uppercase characters.");

    // Check and ensure that at least one character type is chosen
  while (!includeSpecialCharacters && !includeNumbers && !includeLowerCase && !includeUpperCase) {
    alert("You must choose at least one character type.");
    return generatePassword(); // Restart the function to let the user choose again.
  }

    // Concatenate character arrays based on user's choices
  var possibleCharacters = [];
  if (includeSpecialCharacters) possibleCharacters = possibleCharacters.concat(special);
  if (includeNumbers) possibleCharacters = possibleCharacters.concat(nums);
  if (includeLowerCase) possibleCharacters = possibleCharacters.concat(lowerCase);
  if (includeUpperCase) possibleCharacters = possibleCharacters.concat(upperCase);

  var password = '';
  for (let i = 0; i < passwordLength; i++) {
    password += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }

  return password;
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
