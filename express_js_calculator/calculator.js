//jshint esversion:6

// require expressjs
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// you need to specify the use of body-parser explicitely
app.use(bodyParser.urlencoded({extended: true}));

// handle GET requests
app.get("/", function(request, response) {
  // information about request sens
  // console.log(request);

  // send response to browser
  console.log(__dirname);
  response.sendFile(__dirname + "/index.html");
});

// handle POST requests
app.post("/", function(request, response) {
  console.log(request.body);
  console.log("Number1: " + request.body.num1);

  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var result = num1 + num2;

  response.send("Result is: " + result);
});

// listen on port 3000 for any HTTP requests
app.listen(3000, function() {
  console.log("Server started on port 3000!");
});
