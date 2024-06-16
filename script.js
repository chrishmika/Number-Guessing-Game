var chanceCount = 10;
var secretNumber = 0;

function playButtonFunction() {
  const userName = document.querySelector(".userNameEnterField").value;
  console.log(userName);
  const user = document.getElementById("showNameOnGame");
  user.innerHTML = userName;

  document.getElementById("userInfo").style.display = "none";
  document.getElementById("gameDisplay").style.display = "block";
  document.getElementById("howToPlay").style.display = "none";

  const chances = document.getElementById("chancesCountOnGame");
  chanceCount = 10;
  chances.innerHTML = chanceCount;
  secretNumber = Math.floor(Math.random() * 100) + 1;
}

function guessBtnFunction() {
  console.log("yess");
  const chances = document.getElementById("chancesCountOnGame");
  chanceCount--;
  chances.innerHTML = chanceCount;
  const gameDisplay = document.getElementById("displayStatus");
  const userNumber = Number(document.getElementById("userGuessEnterField").value);
  if (userNumber != "") {
    if (chanceCount <= 0) {
      gameDisplay.innerHTML = "Game Over!<br />it's " + secretNumber + "<br /> You Lost";
    } else if (secretNumber < userNumber) {
      gameDisplay.innerHTML = "lower ";
    } else if (secretNumber > userNumber) {
      gameDisplay.innerHTML = "heigher";
    } else if (secretNumber == userNumber) {
      gameDisplay.innerHTML = "You won";
    } else {
      gameDisplay.innerHTML = "invalid!";
      chanceCount++;
      chances.innerHTML = chanceCount;
    }
  } else {
    gameDisplay.innerHTML = "invalid!";
    chanceCount++;
    chances.innerHTML = chanceCount;
  }
}

function tryAgainBtnFunction() {
  secretNumber = Math.floor(Math.random() * 100) + 1;

  const gameDisplay = document.getElementById("displayStatus");
  gameDisplay.innerHTML = "Let's start <br /> again";

  const chances = document.getElementById("chancesCountOnGame");
  chanceCount = 10;
  chances.innerHTML = chanceCount;
}

function goToHowToPlay() {
  document.getElementById("userInfo").style.display = "none";
  document.getElementById("howToPlay").style.display = "block";
}
