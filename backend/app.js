require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
        origin: "*"
    }
});

const Emitter = require('events');

// database
require('./database/conn')

// event Emitter
const eventEmitter = new Emitter();

// Global Provider
app.set('eventEmitter', eventEmitter);

// middlewares
app.use(cors());
app.use(express.json());


// all routers
app.use(require('./routers/authRouter'))
app.use(require('./routers/privetRouter'))
app.use(require('./routers/publicRouter'))
app.use(require('./routers/messageRouter'))


// listen to the server
server.listen(port, () => {
    console.log(`Listening to the port ${port}`);
})


// socket connections and logic

io.on('connection', (socket) => {
    // user connection established
    console.log('User Connected!');

    
    // user disconnected
    socket.on('disconnect', () => {
        console.log('User Disconnected!');
    })
})

// get message from event and send through socket

eventEmitter.on('messageResponse', messageData => {
    io.emit('serverMessageRes', messageData);
    console.log(messageData)
})
