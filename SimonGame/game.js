var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function gameSequence() {
  var randomNumber = ( Math.random() * 4 );
  randomNumber = Math.floor(randomNumber);

  randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  // select button based on randomChosenColour
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  // play a sound based on randomChosenColour
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
};
