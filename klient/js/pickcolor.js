import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socket = io("http://localhost:3000");

import { renderGameboard } from "./gameboard.js";
import { renderGamechat } from "./gamechat.js";
localStorage.removeItem('playerColor')

let cont = document.getElementById('pickColors');

export function renderColors(){
  cont.innerHTML = `
  <button id="startBtn">Starta spel</button>
  `;

  let startBtn = document.getElementById('startBtn');
  let colorsArr = [];

  startBtn.addEventListener('click', () => {
    socket.emit("entering");
    renderGameboard();
    renderGamechat();
  })

  socket.on("entering", (arg) => {
    console.log(arg)
    colorsArr = arg;

    renderButtons(colorsArr);
  })
}

function renderButtons(colorsArr){
  if (colorsArr.length < 1){
    cont.innerHTML = 'Alla färger är tagna';
    return
  }
  cont.innerHTML = `
  <h2>Välj en färg:</h2>
  <div id="colorsCont"></div>
  `;

  let colorsCont = document.getElementById('colorsCont')

  colorsArr.map(button => {
    colorsCont.innerHTML += button;
  })

  let buttons = document.querySelectorAll('.colorBtn');

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {

        if(e.target.id == 'btn-0'){
          localStorage.setItem('playerColor', 'red');
          socket.emit("removeColor", {button: '<button id="btn-0" class="colorBtn">'});
  
        } else if(e.target.id == 'btn-1'){
          localStorage.setItem('playerColor', 'yellow');
          socket.emit("removeColor", {button: '<button id="btn-1" class="colorBtn">'});
  
        } else if(e.target.id == 'btn-2'){
          localStorage.setItem('playerColor', 'brown');
          socket.emit("removeColor", {button: '<button id="btn-2" class="colorBtn">'});
  
        } else if(e.target.id == 'btn-3'){
          localStorage.setItem('playerColor', 'black');
          socket.emit("removeColor", {button: '<button id="btn-3" class="colorBtn">'});
        } 
    })
  })
}