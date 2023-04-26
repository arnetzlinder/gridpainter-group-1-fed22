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
for (let j = 0; j < 15; j++) {
  currentGameBoard[j] = [];
}
app.get("/", (req, res) => {
  res.send("Hej Socket server");
});

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
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
    const index = startBtns.indexOf(arg.button);

    if (index > -1) {
      startBtns.splice(index, 1);
    }

    io.emit("entering", startBtns);
  });

  socket.on("paint", (arg) => {
    io.emit("paint", arg);
    let x = arg.id.split("-");
    currentGameBoard[x[0]][x[1]] = arg.paint;
  });

  socket.on("chat", (arg) => {
    console.log("chat", arg);
    io.emit("chat", arg);
  });
  socket.on("startgame", (arg) => {
    // selecxt a random image from tha databas
    try {
      const sql = "SELECT * FROM `examplepicture` ORDER BY RAND() LIMIT 1";
      connection.query(sql, (error, results) => {
        if (error) {
          console.error(error);
        } else {
          io.emit("startgame", results[0]);
          chosenGameBoard = JSON.parse(results[0]["picture-array"]);
        }
      });
    } catch (error) {
      console.log("Oh noes!");
    }

    setTimeout(() => {
      console.log("Now comes the end of time...");
      let percentage = compareArrays(currentGameBoard, chosenGameBoard);
      for (let j = 0; j < 15; j++) {
        currentGameBoard[j] = [];
      }

      io.emit("endgame", percentage);
    }, 5000);

    //io.emit("chat", arg);
  });

  //play again listener
  socket.on("playAgain", () => {
    //reset color buttons
    startBtns = [
      '<button id="btn-0" class="colorBtn">',
      '<button id="btn-1" class="colorBtn">',
      '<button id="btn-2" class="colorBtn">',
      '<button id="btn-3" class="colorBtn">',
    ];
    // reset player list
    players = [];
    //emit play again to all clients
    io.emit("playAgain");
  });
});

// RENDER PLAYERS //

let players = [];

io.on("connection", (socket) => {
  socket.on("new-player", (userName) => {
    players.push(userName);

    if (players.length === 4) {
      io.emit("activate-startBtn");
    }

    io.emit("player-list", players);
  });

  socket.on("disconnect", () => {
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

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array1[i][j] === array2[i][j]) {
        counter++;
      }
    }
  }

  const percentage = counter / (array1.length * array1.length);
  return percentage;
}
