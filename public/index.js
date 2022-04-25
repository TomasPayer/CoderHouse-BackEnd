const socket = io();

socket.on('my message', data => {
    console.log(data);
})