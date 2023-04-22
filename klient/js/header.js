const headerContainer = document.getElementById("header");
import { renderPreviousGames } from "./recentGames.js";

export function renderHeader() {
  let headerWrapper = document.createElement("div");
  headerWrapper.id = "header-wrapper";

  let logoContainer = document.createElement("div");
  logoContainer.id = "logo-container";

  let logoText = document.createElement("h1");
  logoText.id = "logo-text";
  logoText.innerHTML = "Grid Painters";

  headerContainer.append(headerWrapper);
  headerWrapper.append(logoContainer);
  logoContainer.append(logoText);

  let navContainer = document.createElement("div");
  navContainer.id = "nav-container";

  let navButtons = document.createElement("div");
  navButtons.id = "nav-buttons";

  let homeButton = document.createElement("button");
  homeButton.id = "home-button";
  homeButton.classList.add("navBtn");
  homeButton.innerHTML = "Home";

  homeButton.addEventListener("click", function () {
    location.reload();
  });

  let profileButton = document.createElement("button");
  profileButton.id = "profile-button";
  profileButton.classList.add("navBtn");
  profileButton.innerHTML = "Profile";

  let myPicturesButton = document.createElement("button");
  myPicturesButton.id = "scoreboard-button";
  myPicturesButton.classList.add("navBtn");
  myPicturesButton.innerHTML = "My Pictures";

  myPicturesButton.addEventListener("click", function () {
    gameFlex.innerHTML = "";

    renderPreviousGames();
  });

  headerWrapper.append(navContainer);
  navContainer.append(navButtons);
  navButtons.append(homeButton);
  navButtons.append(profileButton);
  navButtons.append(myPicturesButton);

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

  let logoutButton = document.createElement("button");
  logoutButton.id = "logout-button";
  logoutButton.innerHTML = "Logout";

  logoutButton.addEventListener("click", function () {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    location.reload();
  });

  navContainer.append(logoutContainer);
  logoutContainer.append(welcomeText);
  logoutContainer.append(logoutButton);
}
