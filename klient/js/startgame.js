import { socket } from "./socket.js";
import { renderButtons } from "./pickcolor.js";

let gameContainer = document.getElementById("game");

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
  let image = JSON.parse(arg["picture-array"]);

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
  }, 5000);
});

socket.on("endgame", (arg) => {
  // let gameContainer = document.getElementById("game");
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
    //location.reload();
  });

  //window.alert("Correctly painted percentage: "+arg+"%")
});

// play again listener
socket.on("playAgain", (startBtns) => {
  console.log('works')
  // let gameContainer = document.getElementById("game");
  // gameContainer.innerHTML = "";
  //renderColors()
  //renderButtons(startBtns);
  location.reload()
});
