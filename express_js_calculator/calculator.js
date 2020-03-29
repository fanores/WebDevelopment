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

// handle GET request for BMI Calculator
app.get("/bmicalculator", function(request, response) {
  // send response to browser
  response.sendFile(__dirname + "/bmiCalculator.html");
});

// handle POST request for BMI Calculator
app.post("/bmicalculator", function(request, response) {
  console.log(request.body);
  console.log("Weight: " + request.body.weight);
  console.log("Height: " + request.body.height);

  var weight = parseFloat(request.body.weight);
  var height = parseFloat(request.body.height);
  var bmi = (weight / (height * height));
console.log("Your BMI is (before round): " + bmi);
  bmi = Math.round(bmi);
  console.log("Your BMI is (after round): " + bmi);

  response.send("Your BMI is: " + bmi);
});

// listen on port 3000 for any HTTP requests
app.listen(3000, function() {
  console.log("Server started on port 3000!");
});
