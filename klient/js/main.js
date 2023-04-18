import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import { renderGameboard } from "./gameboard.js";
const socket = io();

//Calling the renderGameboardfunction to render the gameboard
renderGameboard();