//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request, response){
  const selectedCity = request.body.cityName;
  const apiKey = "01afcb187493871285b239fde270675a";
  const unit = "metric";
  const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&appid=" + apiKey + "&units=" + unit;
  https.get(weatherUrl, function(apiResponse){
    console.log(apiResponse.statusCode);

    apiResponse.on("data", function(data) {
      console.log(data);

      const weatherData = JSON.parse(data);
      console.log(weatherData);

      const dummyObject = {
        name: "Test",
        id: "123"
      };
      console.log(JSON.stringify(dummyObject));

      const temperature = weatherData.main.temp;
      console.log("Temperature is: " + temperature);

      const weatherDescription = weatherData.weather[0].description;
      console.log(weatherDescription);

      const weatherIcon = weatherData.weather[0].icon;
      const weatherIconUrl = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";

      response.write("<h1>Weather is " + weatherDescription + "<h1>");
      response.write("<h1>Temperature in " +  selectedCity + " is: " + temperature + " degrees Celcius.</h1>");
      response.write("<img src=" + weatherIconUrl +">");
      response.send();
    });
  });
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
