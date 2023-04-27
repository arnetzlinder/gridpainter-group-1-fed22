const headerContainer = document.getElementById("top-bar");
import { renderPreviousGames } from "./recentGames.js";

export function renderHeader() {
  let headerWrapper = document.createElement("div");
  headerWrapper.id = "header-wrapper";

  headerContainer.append(headerWrapper);

  let timerAndScoreContainer = document.createElement("div");
  timerAndScoreContainer.id = "timer-and-score-container";

  let timerContainer = document.createElement("div");
  timerContainer.id = "timer-container";

  let timer = document.createElement("p");
  timer.id = "timerAndText";
  timer.innerHTML = "";

  headerWrapper.append(timerAndScoreContainer);
  timerAndScoreContainer.append(timerContainer);
  timerContainer.append(timer);

  let logoutContainer = document.createElement("div");
  logoutContainer.id = "logout-container";

  let welcomeText = document.createElement("p");
  welcomeText.id = "welcome-text";

  const userName = localStorage.getItem("userName");
  if (userName) {
    const capUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
    welcomeText.innerText = `Welcome, ${capUserName}`;
  } else {
    welcomeText.innerText = `Welcome`;
  }

  let previousGamesButton = document.createElement("button");
  previousGamesButton.id = "previous-games-button";
  previousGamesButton.classList.add("top-bar-button");
  previousGamesButton.innerHTML = "Previous Games";

  previousGamesButton.addEventListener("click", function () {
    const mainContainer = document.getElementById("main-container");
    mainContainer.innerHTML = "";

    renderPreviousGames();
  });

  let buttonSpacer = document.createElement("p");
  buttonSpacer.id = "button-spacer";
  buttonSpacer.innerHTML = "|";

  let logoutButton = document.createElement("button");
  logoutButton.id = "logout-button";
  logoutButton.classList.add("top-bar-button");
  logoutButton.innerHTML = "Logout";

  logoutButton.addEventListener("click", function () {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    location.reload();
  });

  headerWrapper.append(welcomeText);
  headerWrapper.append(logoutContainer);
  logoutContainer.append(previousGamesButton);
  logoutContainer.append(buttonSpacer);
  logoutContainer.append(logoutButton);
}
