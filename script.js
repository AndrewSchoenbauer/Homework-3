// Assignment Code
var generateBtn = document.querySelector("#generate");
var userInput;
var userInput1;
var userInput2;
var userInput3;
var userInput4;
charSet1 = "!\"#%&'()*+,-./:;<=>?[]^_`{|}~";
charSet2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
charSet3 = "abcdefghijklmnopqrstuvwxyz";
charSet4 = "1234567890";
specialChar = charSet1.split("");
upperCase = charSet2.split("");
lowerCase = charSet3.split("");
numerical = charSet4.split("");
var options;
// generateBtn.addEventListener("click", function() {
//   password1= writePassword();
//   document.getElementById("password").placeholder = password1
// });



// Write password to the #password input
function writePassword() {
  userInput = Number(prompt("Please enter a password length between 8-128"));
  if (!userInput) {
    alert("Needs a value");
    writePassword();
  }
  else if (userInput < 8 || userInput > 128) {
    alert("Please enter a password length between 8-128");
    writePassword();
  }
  // if (userInput > 128) {
  //   alert("Number must be below 128");
  //    writePassword()
  // }
  // else if (userInput < 8) {
  //   alert("Number must be at least 8")
  //   writePassword()
  //  }
  // else if (userInput === (8-128)) {
  //   console.log(9);
  // }
else {
   userInput1 = confirm("Would you like special characters?");
   userInput2 = confirm("Would you like Uppercase letters?");
   userInput3 = confirm("Would you like lowercase?");
   userInput4 = confirm("Would you like numbers?");
  //  charSet1 = "";
  //  charSet2 = "";
  //  charSet3 = "";
  //  charSet4 = "";
};
if (!userInput1 && !userInput2 && !userInput3 && !userInput4) {
   options = alert("You must make at least one selection")
   writePassword();
}
else if (userInput1 && userInput2 && userInput3 && userInput4) {
  options = specialChar.concat(upperCase,lowerCase,numerical);
}
else if (userInput1 && userInput2 && userInput3) {
  options = specialChar.concat(upperCase,lowerCase);
}
else if ( userInput1 && userInput3 && userInput4) {
  options = specialChar.concat(lowerCase,numerical);
}
else if ( userInput1 && userInput2 && userInput4) {
  options = specialChar.concat(upperCase,numerical);
}
else if (userInput2 && userInput3 && userInput4) {
  options = upperCase.concat(lowerCase,numerical);
}
else if (userInput1 && userInput2) {
  options = specialChar.concat(upperCase);
}
else if (userInput1 && userInput3) {
  options = specialChar.concat(lowerCase);
}
else if (userInput1 && userInput4) {
  options = specialChar.concat(numerical);
}
else if (userInput2 && userInput3) {
  options = upperCase.concat(lowerCase);
}
else if (userInput2 && userInput4) {
  options = upperCase.concat(numerical);
}
else if(userInput3 && userInput4) {
  options = lowerCase.concat(numerical);
}
else if (userInput1) {
  options = specialChar;
}
else if (userInput2) {
  options = upperCase;
}
else if (userInput3) {
  options = lowerCase;
}
else if (userInput4) {
  options = numerical;
}
 
  
  var pass = [];
  for (var i = 0; i < userInput; i++) {
    var options1 = options[Math.floor(Math.random() * options.length)];
    pass.push(options1);
  }
  var password1 = pass.join("");
  User(password1);
  return password1;
}
function User(password1) {
  document.getElementById("password").textContent = password1;
}
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//   