// simple example of a callback function
function someEventListener(typeOfEvent, callback) {
  var eventThatHappend = {
    eventType: "keydown",
    key: "w"
  }

  if eventThatHappend.eventType === typeOfEvent {
    callback(eventThatHappend);
  }
}

// test the callback function
someEventListener("keydown", function(event){
  console.log(event);
});
