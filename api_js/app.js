//jshint esversion:6

const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(request, response){
  const nemsovaUrl = "https://api.openweathermap.org/data/2.5/weather?q=Nemsova&appid=01afcb187493871285b239fde270675a&units=metric";
  https.get(nemsovaUrl, function(apiResponse){
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
      response.write("<h1>Temperature in Nemsova is: " + temperature + " degrees Celcius.</h1>");
      response.write("<img src=" + weatherIconUrl +">");
      response.send();
    });
  });
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});
