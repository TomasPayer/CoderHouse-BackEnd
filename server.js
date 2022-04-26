const express = require('express');
const { Server: HttpServer } = require('http');
const { Server:IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

let mensajes = [];

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

httpServer.listen(3000, () => console.log('SERVER ON'));

io.on('connection', (socket) => {
    console.log('Logged in user');
    socket.emit('my message', 'Hi from the server');

    socket.on('notification', info => {
        console.log(info);
    })

    socket.on('message', data => {
        io.sockets.emit('my message', data);
    })
});
