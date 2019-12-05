// add an event listener for all "drum" button
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // play a sound
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();

    this.style.color = "white";
  });
}
