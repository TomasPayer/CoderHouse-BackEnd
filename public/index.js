//Client view
const socket = io();

let button = document.getElementById('btn-send');
let inputMensaje = document.getElementById('message');
let parrafo = document.getElementById('parrafo');

button.addEventListener('click', function (params) {
    let value = inputMensaje.value;
    
    socket.emit('message', value);
})


socket.on('my message', data => {
    parrafo.innerHTML += '</br>' + data;
    console.log(data);
    socket.emit('notification', 'Message received from the client');
});