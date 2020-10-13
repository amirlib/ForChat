const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));

io.on('connection', function (socket) {
    socket.on('chat message', function (msg, userName) {
        console.log('user: ' + userName + ', message: ' + msg);

        io.emit('chat message', msg, userName);
    });
});

module.exports = server;
