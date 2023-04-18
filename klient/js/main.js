import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import { renderLogin } from "./login.js";
import { renderRegister, renderRegComplete } from "./register.js";
import { renderHome } from "./home.js";
const socket = io();

renderLogin();
