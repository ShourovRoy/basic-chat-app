const express = require('express');
const auth = require('../middlewares/auth');
const messageRouter = express.Router();
const MessageModel = require('../models/messageModel');

// Send message route
messageRouter.post('/sendMessage', auth, async (req, res) => {
    try {

        // access event emitter
        const eventEmitter = req.app.get('eventEmitter')

        // getting user id
        const { _id, name } = req.rootUser;

        // getting message from front-end
        const { message } = req.body;

        if (!message) {
            return res.status(401).json({ error: "Please enter a message" });
        }

        // Saving message to database
        const messageDB = await MessageModel({
            userId: _id,
            name,
            message
        })

        // TODO: need to send it to client using Socket
        const messageRes = await messageDB.save();

        if (!messageRes) {
            return res.status(404).json({ error: "Unable to send the message." });
        }

        // SOCKET logic send message to app
        eventEmitter.emit('messageResponse', {
            userId: _id,
            name,
            message
        });
        console.log('after emmit')

    } catch (error) {
        res.status(404).json({ error: 'Something went wrong. please try again later.' });
    }
})


// Get all messages route
messageRouter.get('/messages', async (req, res) => {
    try {
        const allMessages = await MessageModel.find();

        res.json({ allMessages })

    } catch (error) {
        res.status(404).json({ error: 'Something went wrong. please try again later.' });
    }
})

module.exports = messageRouter;