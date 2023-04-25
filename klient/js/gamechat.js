import { socket } from "./socket.js";

export function renderGamechat() {
  let userName = localStorage.getItem("userName");
  let chatContainer = document.getElementById("chatContainer");
  chatContainer.innerHTML = `
  <div id="messages"></div>
  <div id="inputWrapper">
  <form id="chat-form"> 
  <input type="text" id="messageInput">
  <button id="sendMsgBtn">Skicka</button>
  </form>
  </div>`;

  let sendMsgBtn = document.getElementById("sendMsgBtn");
  let messageInput = document.getElementById("messageInput");
  let messageContainer = document.getElementById("messages");
  let form = document.getElementById("chat-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendMessage();
  });

  sendMsgBtn.addEventListener("click", () => {
    socket.emit("chat", { message: messageInput.value, user: userName });
    messageInput.value = "";
  });

  socket.on("chat", (arg) => {
    console.log(arg.user);
    if (arg.user === userName) {
      messageContainer.innerHTML += `<div class="sender"><p><b>${arg.user}:</b> ${arg.message}</p></div>`;
      messageContainer.scrollTop = messageContainer.scrollHeight;
    } else {
      messageContainer.innerHTML += `<div class="receiver"><p><b>${arg.user}:</b> ${arg.message}</p></div>`;
    }
  });
}
