import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socket = io("http://localhost:3000");

export function renderGamechat(){
  let userName = localStorage.getItem('userName');
  console.log(userName)
  let chatContainer = document.getElementById('chatContainer');
  chatContainer.innerHTML = `
  <div id="messages"></div>
  <input type="text" id="messageInput">
  <button id="sendMsgBtn">skicka</button>`

  let sendMsgBtn = document.getElementById('sendMsgBtn');
  let messageInput = document.getElementById('messageInput');
  let messageContainer = document.getElementById('messages');

  sendMsgBtn.addEventListener('click', () => {
    console.log('click')
    socket.emit("chat", {message: messageInput.value, user: userName});
  })

  socket.on("chat", (arg) => {
    console.log(arg.user)
    messageContainer.innerHTML += `<div><p><b>${arg.user}:</b> ${arg.message}</p></div>`
})
}