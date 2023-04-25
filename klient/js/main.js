import { renderLogin } from "./login.js";
import { renderRegister, renderRegComplete } from "./register.js";
import { renderHome } from "./home.js";
import { renderGameboard } from "./gameboard.js";
import { renderGamechat } from "./gamechat.js";
import { renderHeader } from "./header.js";
import { renderColors } from "./pickcolor.js";

//renderLogin();

//renderHeader();
//renderColors();

//Calling the renderGameboardfunction to render the gameboard
//renderGameboard();
//renderGamechat();

const token = localStorage.getItem("token");
if (token) {
  renderHeader();
  // renderGameboard();
} else {
  renderLogin();
}
