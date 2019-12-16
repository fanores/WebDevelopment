// change color of the h1 element, but make sure jQuery is loaded
$(document).ready(function(){
  $("h1").addClass("big-title margin-50");
  $("h1").text("Bye");

  // change properties for all buttons
  $("button").html("<em>Do it!</em>");

  // change element property
  $("a").attr("href", "https://www.apple.com");
});
