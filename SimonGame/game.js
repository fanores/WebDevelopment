var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function gameSequence() {
  var randomNumber = ( Math.random() * 4 );
  randomNumber = Math.floor(randomNumber);

  randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
};
