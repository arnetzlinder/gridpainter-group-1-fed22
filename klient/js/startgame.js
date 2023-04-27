import { socket } from "./socket.js";
import { renderTimer } from "./timer.js";
import { timeToSaveImage } from "./pictures.js";
import { renderGameboard } from "./gameboard.js";

let gameContainer = document.getElementById("game");

//start game button
export function renderStartBtn() {
  const gameboard = document.getElementById("game");
  const startGameBtn = document.createElement("button");
  startGameBtn.innerText = "START GAME";
  startGameBtn.classList.add("startGameBtn");
  startGameBtn.id = "startGameBtn";
  startGameBtn.disabled = true;

  gameboard.appendChild(startGameBtn);

  startGameBtn.addEventListener("click", function () {
    startGame();
    setTimeout(() => {
      timeToSaveImage();
    }, 58500);
  });
  socket.on("activate-startBtn", () => {
    startGameBtn.disabled = false;
  });
}

//start game function
async function startGame() {
  socket.emit("startgame");
}

socket.on("startgame", (arg) => {
  let image = JSON.parse(arg["picture-array"]);
  renderGameboard();
  renderTimer();
  hideStartBtn();

  for (let i = 0; i < image.length; i++) {
    const row = image[i];
    for (let j = 0; j < row.length; j++) {
      const color = row[j];
      const cell = document.getElementById(`${i}-${j}`);
      cell.classList.remove("brown", "black", "red", "yellow");
      //console.log(color + " " + i + " "+ j)
      cell.classList.add(color);
    }
  }
  setTimeout(() => {
    const cells = document.getElementsByClassName("cell");
    [...cells].forEach((cell) => {
      cell.classList.remove("brown", "black", "red", "yellow");
    });
  }, 60000);
});

function hideStartBtn() {
  const startGameBtn = document.getElementById("startGameBtn");
  startGameBtn.remove();
}

socket.on("endgame", (arg) => {
  arg = arg * 100;

  let percentage = Math.round(arg);

  gameContainer.innerHTML = `
  <h2>You were ${percentage}% right</h2>
  <button id="playAgainBtn">Play again</button>`;

  //play again event
  playAgainBtn.addEventListener("click", () => {
    socket.emit("playAgain");
  });
});

// play again listener
socket.on("playAgain", () => {
  location.reload();
});
