// add an event listener for all "drum" button
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked!");
  });
}
