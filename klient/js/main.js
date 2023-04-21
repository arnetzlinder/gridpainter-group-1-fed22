import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import { renderLogin } from "./login.js";
import { renderRegister, renderRegComplete } from "./register.js";
import { renderHome } from "./home.js";
import { renderGameboard } from "./gameboard.js";
import { renderGamechat } from "./gamechat.js";
import { renderHeader } from "./header.js";
<<<<<<< HEAD
import startGame from "./time.js";

=======
import { renderColors } from "./pickcolor.js";
>>>>>>> 5ac9bd53ff54c446215cd806a1b56977d3ab636f
const socket = io("http://localhost:3000");

renderLogin();

<<<<<<< HEAD
=======
//renderHeader();
//renderColors();

>>>>>>> 5ac9bd53ff54c446215cd806a1b56977d3ab636f
//Calling the renderGameboardfunction to render the gameboard
//renderGameboard();
//renderGamechat();
