const mainContainer = document.querySelector("#main");

export function renderHome() {
  let welcomeMsg = document.createElement("h1");
  welcomeMsg.innerText = "You are now logged in!";
  welcomeMsg.id = "welcomeMsg";

  let welcomeText = document.createElement("h6");
  welcomeText.innerText = "Check if you got a cookie!";
  welcomeText.id = "welcomeText";

  mainContainer.append(welcomeMsg);
  welcomeMsg.append(welcomeText);
}
