import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socket = io("http://localhost:3000");
import { renderGamechat } from "./gamechat.js";
import { saveImage } from "./pictures.js";

const gameFlex = document.getElementById("gameFlex");
const gameboard = document.getElementById("game");

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
}

// Temportaty button for saving images

export function renderSaveButton() {
  let saveImageButton = document.createElement("button");
  saveImageButton.id = "save-image-button";
  saveImageButton.innerHTML = "Save Image";

  saveImageButton.addEventListener("click", function () {
    let gameBoard = document.getElementById("game");

    html2canvas(gameBoard).then(function (canvas) {
      let dataURL = canvas.toDataURL();
      saveImage(dataURL);
    });
  });

  gameboard.append(saveImageButton);
}

renderSaveButton();
