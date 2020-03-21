//jshint esversion:6

// require expressjs
const express = require("express");
const app = express();

// handle GET requests
app.get("/", function(request, response) {
  // information about request sens
  // console.log(request);

  // send response to browser
  response.send("<h1>Hello!</>");
});

app.get("/contact", function(request, response) {
  response.send("<h1>Contact me at ...!</>");
});

app.get("/about", function(request, response) {
  response.send("<h1>This is me!</>");
});

app.get("/hobbies", function(request, response) {
  response.send("<h1>This is my hobby!</>");
});

// listen on port 3000 for any HTTP requests
app.listen(3000, function() {
  console.log("Server started on port 3000!");
});
