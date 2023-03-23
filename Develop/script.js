// Assignment code here

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generatePassword() {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?';
  var charactersLength = characters.length;
  var passwordLength = prompt("How long do you want the password? (Choose a number from 8 to 128)");
  var passwordLengthIsBad = passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)
  
  while (passwordLengthIsBad) {
    passwordLength = prompt("Please enter number from 8 to 128")
    passwordLengthIsBad = passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)
  }

  var randomPassword = ""
  for (let index = 0; index < passwordLength; index++) {
    var randomCharacterPosition = getRandomInt(charactersLength)

    var randomCharacter = characters.charAt(randomCharacterPosition)
    randomPassword = randomPassword + randomCharacter
  }
  return randomPassword
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
