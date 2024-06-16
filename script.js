var chanceCount = 10;
var secretNumber = 0;

function getPlayerName() {
  const userName = document.querySelector(".userNameEnterField");
  console.log(userName);
}

function playButtonFunction() {
  const userName = document.querySelector(".userNameEnterField").value;
  console.log(userName);
  const user = document.getElementById("showNameOnGame");
  user.innerHTML = userName;

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

  if (chanceCount <= 0) {
    gameDisplay.innerHTML = "Game Over!<br />it's " + secretNumber + "<br /> You Lost";
  } else if (secretNumber < userNumber) {
    gameDisplay.innerHTML = "lower Guess again";
  } else if (secretNumber > userNumber) {
    gameDisplay.innerHTML = "heigher Guess again";
  } else if (secretNumber == userNumber) {
    gameDisplay.innerHTML = "You won";
  } else {
    gameDisplay.innerHTML = "Enter valid number!";
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

// function changeName() {
//   const user = document.getElementById("showNameOnGame");
//   user.innerHTML = userName;
// }

// function goToHowToPlay() {
//   const howToPlayPage = document.getElementsByClassName("userInfo").display.value;
//   //   howToPlayPage.style.display = "hidden";

//   //   howToPlayPage.style.color = "red";
//   console.log("yes");
//   console.log(howToPlayPage);
// }
