import { socket } from "./socket.js";

import { renderGamechat } from "./gamechat.js";
import { renderPlayingUsers } from "./currentusers.js";
import { renderStartBtn } from "./startgame.js";

localStorage.removeItem("playerColor");

let cont = document.getElementById("pickColors");
let messageCont = document.getElementById("message");

export function renderColors() {
  let cont = document.getElementById("pickColors");
  cont.innerHTML = `
  <button id="startBtn">Join Game</button>
  `;

  let startBtn = document.getElementById("startBtn");
  let colorsArr = [];

  startBtn.addEventListener("click", () => {
    socket.emit("entering");
  });

  socket.on("entering", (arg) => {
    let userColor = localStorage.getItem("playerColor");
    if (userColor) {
      cont.innerHTML = ``;
      renderPlayingUsers();
      renderGamechat();
    } else {
      if(arg.length >= 1){
        colorsArr = arg;
        renderButtons(colorsArr);
        renderGamechat();
      } else{
        let startGameButton = document.querySelector('.startGameBtn')
        if(!startGameButton){
          cont.innerHTML = "";
          messageCont.innerHTML = `<h2 class="game-full">Sorry, the game is full</h2>`
          return
        }
      }
    }
  });
}

export function renderButtons(colorsArr) {

  console.log(colorsArr);
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

      renderStartBtn();

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
