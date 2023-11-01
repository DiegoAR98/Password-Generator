// Assignment code here
// Character sets
var nums = "0123456789".split("");
var special = "!%&,.*+-./<>?~".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ["R", "P", "S"];

var playGame = function () {
  // example prompt call
  var userChoice = window.prompt("Enter R, P, or S:");
  window.alert("User Choice is " + userChoice);

  // Ask user for their choice

  // Get random index from array of options

  // If choices are the same, it's a tie

  // Check every win condition for the player

  // If above conditions failed, assume player lost

  // Print stats

  // Ask user to play again

  // If user pressed OK, run the function again
};

// Run the game for the first time
playGame();




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
