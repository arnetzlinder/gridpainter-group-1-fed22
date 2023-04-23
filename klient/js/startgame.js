import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
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
  socket.emit('startgame')


  // const image = await fetchImage();
  // //store in play image
  // await showPreview(image);
  // console.log("loggas");
  // //await call TimerFunction (will start after 5 sec)
}

socket.on("startgame", (arg) => {
  console.log("The server told us to strart the game with this image: ")
  console.log(arg)
  let image = arg["picture-array"]
  for (let i = 0; i < image.length; i++) {
    const row = image[i];
    for (let j = 0; j < row.length; j++) {
      const color = row[j];
      const cell = document.getElementById(`${i}-${j}`);
      cell.classList.remove("brown", "black", "red", "yellow");
      cell.classList.add(color);
    }
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      const cells = document.getElementsByClassName("cell");
      [...cells].forEach((cell) => {
        cell.classList.remove("brown", "black", "red", "yellow");
        resolve();
      });
    }, 5000);
  });
})

socket.on("endgame", (arg) => {
  console.log("The end is near!!!!111one")

})
//shows image for 5 secs and then clear board
function showPreview(image) {
  for (let i = 0; i < image.length; i++) {
    const row = image[i];
    for (let j = 0; j < row.length; j++) {
      const color = row[j];
      const cell = document.getElementById(`${i}-${j}`);
      cell.classList.remove("brown", "black", "red", "yellow");
      cell.classList.add(color);
    }
  }
  //timeOut after 5 sec and clear board (is a promise for other functions)
  return new Promise((resolve) => {
    setTimeout(() => {
      const cells = document.getElementsByClassName("cell");
      [...cells].forEach((cell) => {
        cell.classList.remove("brown", "black", "red", "yellow");
        resolve();
      });
    }, 5000);
  });
}

//now fetching a random picture from db for every click on button
async function fetchImage() {
  const response = await fetch("http://localhost:3000/images/random", {
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    alert("Could not load image, please try again");
  } else {
    const imageData = await response.json();
    return imageData["picture-array"];
  }
}
