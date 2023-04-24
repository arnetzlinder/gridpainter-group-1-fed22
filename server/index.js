const express = require("express");
const path = require("path");
const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mysql = require("mysql2");
const connection = require("./conn");
require("dotenv").config();


const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const imagesRouter = require("./routes/images");
const picsRouter = require("./routes/pics");

let currentGameBoard = [[]];
let chosenGameBoard = [[]];
for (let j = 0;j<15;j++) {
  currentGameBoard[j] = [];
}
app.get("/", (req, res) => {
  res.send("Hej Socket server");
});

const io = require("socket.io")(server, {
  cors: {
    origin: "http://127.0.0.1:5501",
    methods: ["GET", "POST"],
  },
});

let startBtns = [
  '<button id="btn-0" class="colorBtn">',
  '<button id="btn-1" class="colorBtn">',
  '<button id="btn-2" class="colorBtn">',
  '<button id="btn-3" class="colorBtn">',
];

io.on("connection", (socket) => {
  console.log("någon är här");

  socket.on("entering", (arg) => {
    io.emit("entering", startBtns);
  });

  socket.on("removeColor", (arg) => {
    console.log(arg);
    //io.emit("entering", startBtns);
    const index = startBtns.indexOf(arg.button);

    if (index > -1) {
      startBtns.splice(index, 1);
    }

    io.emit("entering", startBtns);
  });

  socket.on("paint", (arg) => {
    io.emit("paint", arg);
    console.log("Somebody painted something on: ")
    console.log(arg)
    let x = arg.id.split('-');
    console.log(x)
    currentGameBoard[x[0]][x[1]] = arg.paint
    console.log(currentGameBoard)
  });

  socket.on("chat", (arg) => {
    console.log("chat", arg);
    io.emit("chat", arg);
  });
  socket.on("startgame", (arg) => {
    console.log("Time to start the game!");
    // selecxt a random image from tha databas
    try {
      const sql = "SELECT * FROM `examplepicture` ORDER BY RAND() LIMIT 1";
      connection.query(sql, (error, results) => {
        if (error) {
          console.error(error);
          console.log("Oh noes!")
        } else {
          io.emit('startgame', results[0])
          chosenGameBoard = results[0]["picture-array"];
          console.log(chosenGameBoard)
        }
      });
    } catch (error) {
      console.log("Oh noes!")
    }
    
    setTimeout(() => {
      console.log("Now comes the end of time...")
      let percentage = compareArrays(currentGameBoard, chosenGameBoard)
      console.log("Percentage right was: "+percentage)

      io.emit('endgame', percentage)

    }, 65000);





    //io.emit("chat", arg);
  });


});

// RENDER PLAYERS //

const players = [];

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("new-player", (userName) => {
    console.log(`New player joined: ${userName}`);

    players.push(userName);

    io.emit("player-list", players);
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected");

    const index = players.findIndex((player) => player.id === socket.id);
    if (index !== -1) {
      players.splice(index, 1);
    }

    io.emit("player-list", players);
  });
});

server.listen(3000);

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/images", imagesRouter);
app.use("/pics", picsRouter);

function compareArrays(array1, array2) {
  const length = array1.length;
  let counter = 0;

  for(let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++){
          if (array1[i][j] === array2[i][j]) {
              counter++
          } 
      }

  }

  const percentage = counter/(array1.length*array1.length);
  return percentage;
}

