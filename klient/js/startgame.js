import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import { renderButtons } from "./pickcolor.js";
const socket = io("http://localhost:3000");

//start game button
export function renderStartBtn() {
  const gameboard = document.getElementById("game");
  const startGameBtn = document.createElement("button");
  startGameBtn.innerText = "STARTA SPEL";
  startGameBtn.classList.add("startGameBtn");

  gameboard.appendChild(startGameBtn);

  startGameBtn.addEventListener("click", startGame);
}

//start game function
async function startGame() {
  // plz start the game!
  socket.emit("startgame");
}

socket.on("startgame", (arg) => {
  console.log("The server told us to strart the game with this image: ");
  console.log(arg);
  let image = arg["picture-array"];
  for (let i = 0; i < image.length; i++) {
    const row = image[i];
    for (let j = 0; j < row.length; j++) {
      const color = row[j];
      const cell = document.getElementById(`${i}-${j}`);
      cell.classList.remove("brown", "black", "red", "yellow");
      cell.classList.add(color);
    }
  }
  setTimeout(() => {
    const cells = document.getElementsByClassName("cell");
    [...cells].forEach((cell) => {
      cell.classList.remove("brown", "black", "red", "yellow");
    });
  }, 5000);
});

socket.on("endgame", (arg) => {
  let gameContainer = document.getElementById("game");
  console.log("The end is near!!!!111one");
  console.log("Correctly painted percentage: " + arg);
  arg = arg * 100;

  let percentage = Math.round(arg);

  gameContainer.innerHTML = `
  <h2>Ni fick ${percentage}% rätt</h2>
  <button id="playAgainBtn">Spela igen</button>`;

  //play again event
  playAgainBtn.addEventListener("click", () => {
    socket.emit("playAgain");
  });

  //window.alert("Correctly painted percentage: "+arg+"%")
});

// play again listener
socket.on("playAgain", (startBtns) => {
  let gameContainer = document.getElementById("game");
  gameContainer.innerHTML = "";
  renderButtons(startBtns);
});
