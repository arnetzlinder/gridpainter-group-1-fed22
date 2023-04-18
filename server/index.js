const app = require('express')();
const server = require('http').createServer(app);
const mysql = require("mysql2");
const connection = require("./conn");
const cookieParser = require("cookie-parser");
const logger = require("morgan");


app.get('/', (req, res) => {
 res.send('Hej Socket server');
})


const io = require('socket.io')(server, {
    cors: {
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST']
 }
})

io.on('connection', (socket) => {
    console.log('någon är här')
    socket.on('chat', (arg) => {
    console.log('incoming chat', arg);
    io.emit('chat', arg);
 })

})




server.listen(3000)