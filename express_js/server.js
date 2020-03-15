//jshint esversion:6

// require expressjs
const express = require("express");
const app = express();

// listen on port 3000 for any HTTP requests
app.listen(3000, function() {
  console.log("Server started on port 3000!")
});
