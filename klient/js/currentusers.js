import { socket } from "./socket.js";
const userContainer = document.getElementById("current-users");
const gameboard = document.getElementById("game");

export function renderPlayersButton() {
  let renderPlayersButton = document.createElement("button");
  renderPlayersButton.classList.add("render-players-button");
  renderPlayersButton.innerHTML = "Render players";
  gameboard.appendChild(renderPlayersButton);

  renderPlayersButton.addEventListener("click", () => {
    const currentPlayers = userContainer.querySelectorAll(".player-container");
    if (currentPlayers.length >= 4) {
      renderPlayersButton.disabled = true;
      renderPlayersButton.innerText = "Game is full";
      return;
    }
    renderPlayingUsers();
  });
}

export function renderPlayingUsers() {
  if (userContainer.getAttribute("data-rendered") === "true") {
    return;
  }

  userContainer.innerHTML = "";

  function handlePlayerList(players) {
    console.log("Received player list:", players);

    userContainer.innerHTML = "";

    players.forEach((player, index) => {
      let playerContainer = document.createElement("div");
      playerContainer.classList.add("player-container");
      playerContainer.innerHTML = player;

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

    if (players.length >= 4) {
      let renderPlayersButton = document.querySelector(
        ".render-players-button"
      );
      renderPlayersButton.disabled = true;
      renderPlayersButton.innerText = "Game is full";
    }
  }

  socket.off("player-list", handlePlayerList);
  socket.on("player-list", handlePlayerList);

  let userName = localStorage.getItem("userName");
  socket.emit("new-player", userName);

  userContainer.setAttribute("data-rendered", "true");
}
