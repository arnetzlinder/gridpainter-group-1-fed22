import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socket = io("http://localhost:3000");

import { renderGameboard } from "./gameboard.js";
import { renderGamechat } from "./gamechat.js";
import { renderPlayingUsers } from "./currentusers.js";

localStorage.removeItem("playerColor");

let topBarText = document.getElementById("timerAndText");
let cont = document.getElementById("pickColors");
let gameboard = document.getElementById("game");

export function renderColors() {
  cont.innerHTML = `
  <button id="startBtn">Start Game</button>
  `;

  let startBtn = document.getElementById("startBtn");
  let colorsArr = [];

  startBtn.addEventListener("click", () => {
    socket.emit("entering");
    renderGamechat();
  });

  socket.on("entering", (arg) => {
    let userColor = localStorage.getItem("playerColor");
    if (userColor) {
      let color;
      if (userColor == "red") {
        color = "röd";
      } else if (userColor == "yellow") {
        color = "gul";
      } else if (userColor == "brown") {
        color = "brun";
      } else {
        color = "svart";
      }
      cont.innerHTML = `<p>Du har valt färgen ${color}</p>`;
      // renderGameboard();
      renderPlayingUsers();
    } else {
      colorsArr = arg;
      renderButtons(colorsArr);
    }
  });
}

function renderButtons(colorsArr) {
  console.log(colorsArr);
  if (colorsArr.length < 1) {
    cont.innerHTML = "Alla färger är tagna";
    return;
  }
  cont.innerHTML = `
  <h2>Pick a color</h2>
  <div id="colorsCont"></div>
  `;

  let colorsCont = document.getElementById("colorsCont");

  colorsArr.map((button) => {
    colorsCont.innerHTML += button;
  });

  let buttons = document.querySelectorAll(".colorBtn");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let pickedArray = [];

      renderGameboard();

      if (e.target.id == "btn-0") {
        localStorage.setItem("playerColor", "red");
        socket.emit("removeColor", {
          button: '<button id="btn-0" class="colorBtn">',
        });
        renderButtons(pickedArray);
      } else if (e.target.id == "btn-1") {
        localStorage.setItem("playerColor", "yellow");
        socket.emit("removeColor", {
          button: '<button id="btn-1" class="colorBtn">',
        });
      } else if (e.target.id == "btn-2") {
        localStorage.setItem("playerColor", "brown");
        socket.emit("removeColor", {
          button: '<button id="btn-2" class="colorBtn">',
        });
      } else if (e.target.id == "btn-3") {
        localStorage.setItem("playerColor", "black");
        socket.emit("removeColor", {
          button: '<button id="btn-3" class="colorBtn">',
        });
      }
    });
  });
}

function hideColors() {
  cont.innerHTML = "";
}
