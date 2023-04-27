import { socket } from "./socket.js";

import { renderGamechat } from "./gamechat.js";
import { renderStartBtn } from "./startgame.js";
// import { renderSaveButton } from "./pictures.js";
//import { renderPlayersButton } from "./currentusers.js";

export function renderGameboard() {
  renderGamechat();
  // Here we append the HTML-element to the gameboard element
  const gameboard = document.getElementById("game");

  //size of gameboard
  const gameboardSize = 15;

  //loop for creating rows
  for (let i = 0; i < gameboardSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    gameboard.appendChild(row);

    //loop for creating cells within each row
    for (let j = 0; j < gameboardSize; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = j.toString() + "-" + i.toString();
      row.appendChild(cell);

      //add click event listener to each cell
      cell.addEventListener("click", () => {
        socket.emit("paint", {
          paint: localStorage.getItem("playerColor"),
          id: cell.id,
        });
      });
    }
  }
  socket.on("paint", (arg) => {
    let cell = document.getElementById(arg.id);
    cell.classList.add(arg.paint);
    console.log("Received cell paint event", arg.paint);
  });
  renderStartBtn();
}
