var chanceCount = 10;

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
}

function guessBtnFunction() {
  console.log("yess");
  const chances = document.getElementById("chancesCountOnGame");
  chanceCount--;
  chances.innerHTML = chanceCount;
  if (chanceCount <= 0) {
    const gameDisplay = document.getElementById("displayStatus");
    gameDisplay.innerHTML = "Game Over!<br /> You Lost";
  }
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
