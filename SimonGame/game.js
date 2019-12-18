var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

// call the game, when it is started
$(document).keydown(function() {
  if (!started) {
    $("#level-title").text("Level: " + level);
    gameSequence();
    started = true;
  }
});

// play a sound
function playSound(chosenColour) {
  var audio = new Audio("sounds/" + chosenColour + ".mp3");
  audio.play();
}

// animate the use colour selection
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  // set timout in order to remove the assigned class
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// check the user answer
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function(){
        gameSequence();
      }, 1000);
    }

  } else {
    console.log("wrong");
  }
}

// handler for user, when he clicks on a button
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

// handle the generated game sequence
function gameSequence() {

  userClickedPattern = [];

  level++;
  $("#level-title").text("Level: " + level);

  var randomNumber = ( Math.random() * 4 );
  randomNumber = Math.floor(randomNumber);

  randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  // select button based on randomChosenColour
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  // play a sound based on randomChosenColour
  playSound(randomChosenColour);
}
