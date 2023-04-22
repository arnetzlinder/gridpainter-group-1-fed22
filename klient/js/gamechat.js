import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socket = io("http://localhost:3000");

export function renderGamechat(){
  let userName = localStorage.getItem('userName');
  let chatContainer = document.getElementById('chatContainer');
  chatContainer.innerHTML = `
  <div id="messages"></div>
  <input type="text" id="messageInput">
  <button id="sendMsgBtn">Skicka</button>`

  let sendMsgBtn = document.getElementById('sendMsgBtn');
  let messageInput = document.getElementById('messageInput');
  let messageContainer = document.getElementById('messages');

  sendMsgBtn.addEventListener('click', () => {
    socket.emit("chat", {message: messageInput.value, user: userName});
    messageInput.value = '';
  })

  socket.on("chat", (arg) => {
    console.log(arg.user)
    if (arg.user=== userName) {
      messageContainer.innerHTML += `<div class="sender"><p><b>${arg.user}:</b> ${arg.message}</p></div>`
    }
    else {
      messageContainer.innerHTML += `<div class="receiver"><p><b>${arg.user}:</b> ${arg.message}</p></div>`
    }
  })
  
}