var randomNumber = Math.floor(Math.random() * 6);
var randomNumber1 = Math.floor(Math.random() * 6);

var images = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

var randomImage = images[randomNumber];
var randomImage1 = images[randomNumber1];

var imageElement = document.querySelector(".img1");
var imageElement1 = document.querySelector(".img2");

imageElement.setAttribute("src", randomImage);
imageElement1.setAttribute("src", randomImage1);

var result = document.querySelector(".container h1");
if (randomNumber > randomNumber1) {
  result.innerHTML = "Player 1 Wins";
  result.style.color = "red";
} else if (randomNumber1 > randomNumber) {
  result.innerHTML = "Player 2 Wins";
  result.style.color = "red";
} else {
  result.innerHTML = "Draw";
  result.style.color = "green";
}
