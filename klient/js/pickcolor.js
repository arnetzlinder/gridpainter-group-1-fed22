import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socket = io("http://localhost:3000");

export function renderColors(){
  let cont = document.getElementById('pickColors');
  cont.innerHTML = `
  <button id="startBtn">Starta spel</button>
  `;

  let startBtn = document.getElementById('startBtn');
  let colorsArr = [];

  startBtn.addEventListener('click', () => {
    socket.emit("entering");
  })

  socket.on("entering", (arg) => {
    console.log(arg)
    colorsArr = arg;
    
    cont.innerHTML = `
    <h2>Välj en färg:</h2>
    <div id="colorsCont"></div>
    `;

    let colorsCont = document.getElementById('colorsCont')

    colorsArr.map(button => {
      colorsCont.innerHTML += button;
    })

    let buttons = document.querySelectorAll('.colorBtn');

    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        if(e.target.id == 'btn-0'){
          console.log('red');
          //sätt local storage
          //uppdatera server, socket
          // gå vidare till spelet

        } else if(e.target.id == 'btn-1'){
          console.log('yellow')

        } else if(e.target.id == 'btn-2'){
          console.log('brown')

        } else if(e.target.id == 'btn-3'){
          console.log('black')
        } 
      })
    })
  })
}