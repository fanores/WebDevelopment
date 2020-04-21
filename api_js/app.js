//jshint esversion:6

const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(request, response){
  const nemsovaUrl = "https://api.openweathermap.org/data/2.5/weather?q=Nemsova&appid=01afcb187493871285b239fde270675a&units=metric";
  https.get(nemsovaUrl, function(apiResponse){
    console.log(apiResponse);
  });
  response.send("Server is up and running.");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});
