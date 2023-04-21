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

app.get("/", (req, res) => {
  res.send("Hej Socket server");
});

const io = require("socket.io")(server, {
  cors: {
    origin: "http://127.0.0.1:5502",
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
  });

  socket.on("chat", (arg) => {
    console.log("chat", arg);
    io.emit("chat", arg);
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
