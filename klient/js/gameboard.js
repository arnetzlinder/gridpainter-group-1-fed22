import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socket = io("http://localhost:3000");

import { renderGamechat } from "./gamechat.js";
import { renderStartBtn } from "./startgame.js";

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
        socket.emit("paint", { paint: "color", id: cell.id });
      });
    }
  }
  socket.on("paint", (arg) => {
    let cell = document.getElementById(arg.id);
    cell.classList.add(arg.paint);
  });
  renderStartBtn();
}
