var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

// play a sound
function playSound(chosenColour) {
  var audio = new Audio("sounds/" + chosenColour + ".mp3");
  audio.play();
};

// handler for user, when he clicks on a button
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
});

// handle the generated game sequence
function gameSequence() {
  var randomNumber = ( Math.random() * 4 );
  randomNumber = Math.floor(randomNumber);

  randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  // select button based on randomChosenColour
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  // play a sound based on randomChosenColour
  playSound(randomChosenColour);
};
