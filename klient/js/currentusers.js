import { socket } from "./socket.js";
const userContainer = document.getElementById("users");

const gameboard = document.getElementById("game");

export function renderPlayingUsers() {
  if (userContainer.getAttribute("data-rendered") === "true") {
    return;
  }

  userContainer.innerHTML = "";

  function handlePlayerList(players) {
    console.log("Received player list:", players);

    userContainer.innerHTML = "";

    if(players.length <=4){
      players.forEach((player, index) => {
        let playerContainer = document.createElement("div");
        playerContainer.classList.add("player-container");
        playerContainer.innerHTML = "<div class=userlist_"+player.userColor+"></div>"+player.userName
  
        if (index === 0) {
          playerContainer.id = "player-one-container";
        } else if (index === 1) {
          playerContainer.id = "player-two-container";
        } else if (index === 2) {
          playerContainer.id = "player-three-container";
        } else if (index === 3) {
          playerContainer.id = "player-four-container";
        }
  
        userContainer.appendChild(playerContainer);
      });
    }
  }

  socket.off("player-list", handlePlayerList);
  socket.on("player-list", handlePlayerList);

  let userColor = localStorage.getItem('playerColor');
  console.log(userColor)

  let userName = localStorage.getItem("userName");

  socket.emit("new-player", ({'userName': userName, 'userColor': userColor} ));

  userContainer.setAttribute("data-rendered", "true");
}
