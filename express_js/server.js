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

// listen on port 3000 for any HTTP requests
app.listen(3000, function() {
  console.log("Server started on port 3000!");
});
