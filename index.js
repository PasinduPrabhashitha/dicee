//Image 1 Javascript
var  randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

// Image 2 Javascript
var  randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomImage2 = "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", "images/" + randomImage2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "Player 1 Wins 🏆";
}else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins 🏆";
}else {
  document.querySelector("h1").textContent = "Draw!";
}
