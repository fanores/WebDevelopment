/* DiceeGame - JavaScript Code */
function setImageSource (diceeClassName) {
  // get random number
  var randomNumber = (Math.random() * 6) + 1;
  randomNumber = Math.floor(randomNumber);

  // set image name based on random random number
  var randomDiceeImage = "images/" + "dice" + randomNumber + ".png";

  // set image source property
  var diceeElement = document.getElementsByClassName(diceeClassName)[0];
  diceeElement.setAttribute("src", randomDiceeImage);

  return randomNumber;
}

function setResults (player1Score, player2Score) {
  // show results
  var textElement = document.querySelector("div.container h1");
  if (player1Score > player2Score) {
    textElement.textContent = "Player 1 Wins!";
  }
  else if (player2Score > player1Score) {
    textElement.textContent = "Player 2 Wins!";
  }
  else {
    textElement.textContent = "Draw!";
  }
}

// dicee1 - score
var player1Score = setImageSource("img1");

// dicee2 - score
var player2Score = setImageSource("img2");

// results
setResults(player1Score,player2Score);
