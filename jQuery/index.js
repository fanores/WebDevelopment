// change color of the h1 element, but make sure jQuery is loaded
$(document).ready(function(){
  $("h1").addClass("big-title margin-50");
  $("h1").text("Bye");

  // change properties for all buttons
  $("button").html("<em>Do it!</em>");

  // change element property
  $("a").attr("href", "https://www.apple.com");

  // add event listener to element
  $("h1").click(function() {
    $("h1").css("color","purple");
  });

  $("button").click(function() {
    $("h1").css("color","red");

    $("h1").slideUp().slideDown().animate({opacity: 0.5});
  });

  $("input").keydown(function(event) {
    console.log(event.key);
  });

  // change the h1 text to reflect the key pressed
  $(document).keydown(function(event) {
    $("h1").text(event.key);
  });
});
