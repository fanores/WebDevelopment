// function to play a sound based on a image/key
function playSound(letter) {
  switch (letter) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(buttonInnerHtml);
  }
}

// function for an animation of the buttons
function buttonAnimation(keyPressed) {
  var pressedButton = document.querySelector("." + keyPressed);

  pressedButton.classList.add("pressed");

  setTimeout(function(){
    pressedButton.classList.remove("pressed");
  }, 100);

}

// add an event listener for all "drum" button
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // play a sound for the pressed button
    var buttonInnerHtml = this.innerHTML;
    playSound(buttonInnerHtml);

    buttonAnimation(buttonInnerHtml);

    this.style.color = "white";
  });
}


// add key press event addEventListener
document.addEventListener("keydown", function(event){
  playSound(event.key);

  buttonAnimation(event.key);
});
