/* Make user name with first letter uppercase and rest lowercase. */
var userNameInput = prompt("Type your name:");
var firstChar = userNameInput.slice(0,1);
var firstCharUpperCase = firstChar.toUpperCase();
var restChars = userNameInput.slice(1,userNameInput.length);
var restCharsLowerCase = restChars.toLowerCase();
alert("Your name is: " + firstCharUpperCase + restCharsLowerCase);
