import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import { renderLogin } from "./login.js";
import { renderGameboard } from "./gameboard.js";
import { renderHeader } from "./header.js";
import { renderColors } from "./pickcolor.js";
const socket = io("http://localhost:3000");


const token = localStorage.getItem("token");
if (token) {
  renderHeader();
  renderGameboard();
} else {
  renderLogin();
}


