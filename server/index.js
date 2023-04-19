const express = require("express");
const path = require("path");
const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mysql = require("mysql2");
//const connection = require("./conn");sta
require("dotenv").config();

const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");

app.get("/", (req, res) => {
  res.send("Hej Socket server");
});

const io = require("socket.io")(server, {
  cors: {
    origin: "http://127.0.0.1:5501",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("någon är här");
  socket.on("chat", (arg) => {
    console.log("incoming chat", arg);
    io.emit("chat", arg);
  });
  socket.on("paint", (arg) => {
    console.log("incoming klick", arg);
    io.emit("paint", arg);
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
