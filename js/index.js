var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

document
  .getElementById("img1")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");
document
  .getElementById("img2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if(randomNumber1 > randomNumber2){
    document.getElementById('result').innerHTML = "Player One Wins";
  }else if(randomNumber2>randomNumber1){
    document.getElementById('result').innerHTML = "Player Two Wins";
  }else{
    document.getElementById('result').innerHTML = "The result is equal";
  }