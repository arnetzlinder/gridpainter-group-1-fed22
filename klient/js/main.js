import { renderLogin } from "./login.js";
import { renderRegister, renderRegComplete } from "./register.js";
import { renderHome } from "./home.js";
import { renderGameboard } from "./gameboard.js";
import { renderGamechat } from "./gamechat.js";
import { renderHeader } from "./header.js";
import { renderColors } from "./pickcolor.js";
import { renderBigLogo } from "./renderLogo.js";

const mainContainer = document.getElementById("main-container");
const headerContainer = document.getElementById("header");

const token = localStorage.getItem("token");
if (token) {
  renderBigLogo();
  renderHeader();
  renderColors();

  window.addEventListener("load", () => {
    mainContainer.style.display = "block";
  });
} else {
  renderLogin();
}
