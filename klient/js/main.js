import { renderLogin } from "./login.js";
import { renderRegister, renderRegComplete } from "./register.js";
import { renderHome } from "./home.js";
import { renderGameboard } from "./gameboard.js";
import { renderGamechat } from "./gamechat.js";
import { renderHeader } from "./header.js";
import { renderColors } from "./pickcolor.js";


const token = localStorage.getItem("token");
if (token) {
  renderHeader();
  renderColors();
} else {
  renderLogin();
}
