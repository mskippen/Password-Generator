// Password generator
var generateBtn = document.querySelector("#generate");

//function to generate password
function generatePassword() {
  var passwordLength = prompt("Enter a value between 8 and 128 characters");
  //check for password length
  if (passwordLength < 8) {
    var minPassword = prompt("Minimum password length should be 8 characters");
    passwordLength = minPassword;
    if (minPassword > 128 && isNaN(passwordLength)) {
      var maxPassword = prompt(
        "Password length should be less than 128 characters"
      );
      passwordLength = maxPassword;
    }
  } else if (isNaN(passwordLength)) {
    prompt("Only numerical value can be entered");
    alert("Only numerical value can be entered or password won't generate");
    window.location.reload();
  }
  //check for lowercase
  var lowerCase = prompt(
    "Do you want a lowercase character? Enter yes or no (case sensitive)."
  );

  if (lowerCase === "" && lowerCase != "No") {
    lowerCase = false;
  } else if (lowerCase == "Yes") {
    lowerCase = true;
  } else {
    lowerCase = "";
  }
  //check for uppercase
  var upperCase = prompt(
    "Do you want an UPPERCASE character? Enter Yes or No (case sensitive)."
  );
  if (upperCase == "" && upperCase != "No") {
    upperCase = false;
  } else if (upperCase == "Yes") {
    upperCase = true;
  } else {
    upperCase = "";
  }
  //check for special characters
  var specialCharacters = prompt(
    "Do you want special characters, e.g #&*? Enter Yes or No (case sensitive)."
  );
  if (specialCharacters === "" && specialCharacters != "No") {
    specialCharacters = false;
  } else if (specialCharacters == "Yes") {
    specialCharacters = true;
  } else {
    specialCharacters = "";
  }
  //check for numeric
  var numeric = prompt(
    "Do you want a numeric character, e.g 1234? Enter Yes or No (case sensitive)."
  );

  if (numeric === "" || numeric == "No") {
    prompt("You must enter a selection of Yes if you said No to all others.");
    numeric = true;
  } else {
    numeric = true;
  }

  //log to the console to check for errors
  console.log(passwordLength);
  console.log(lowerCase, "lowercase");
  console.log(upperCase, "uppercase");
  console.log(numeric, "numeric");
  console.log(specialCharacters, "spc");

  function getRandomLowerCase() {
    var anysize = Math.floor(passwordLength * 0.25); //the size of string
    var charset = "abcdefghijklmnopqrstuvwxyz"; //from where to create
    result = "";
    for (var i = 0; i < anysize; i++)
      result += charset[Math.floor(Math.random() * charset.length)];
    console.log(result);
    lowerCase = result;
  }
  function getRandomUpperCase() {
    var anysize = Math.floor(passwordLength * 0.25); //the size of string
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //from where to create
    result = "";
    for (var i = 0; i < anysize; i++)
      result += charset[Math.floor(Math.random() * charset.length)];
    console.log(result);
    upperCase = result;
  }
  function getRandomSpecialCharacters() {
    var anysize = Math.floor(passwordLength * 0.25); //the size of string
    var charset = '!@#$%^&*()_+-=[]{};:"\\'; //from where to create
    result = "";
    for (var i = 0; i < anysize; i++)
      result += charset[Math.floor(Math.random() * charset.length)];
    console.log(result);
    specialCharacters = result;
  }

  function getRandomNumbers() {
    var anysize =
      lowerCase != "" || upperCase != ""
        ? Math.ceil(passwordLength * 0.35)
        : Math.floor(passwordLength);
    var numericLength =
      specialCharacters != "" ? anysize : Math.ceil(passwordLength);
    var charset = "0123456789"; //from where to create
    result = "";
    for (var i = 0; i < numericLength; i++)
      result += charset[Math.floor(Math.random() * charset.length)];
    console.log(result);
    numeric = result;
  }

  //check for conditionals to meet required criteria
  if ((lowerCase != false || lowerCase == "Yes")) {
    getRandomLowerCase();
  } else {
    lowerCase = "";
  }
  if (upperCase != false) {
    getRandomUpperCase();
  } else {
    upperCase = "";
  }
  if (specialCharacters != false) {
    getRandomSpecialCharacters();
  } else {
    specialCharacters = "";
  }
  if (numeric) getRandomNumbers();

  const randomPassword = lowerCase + specialCharacters + numeric + upperCase;

  return randomPassword; //return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword); //add click functionality to button
