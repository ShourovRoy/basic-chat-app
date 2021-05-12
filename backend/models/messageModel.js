const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    userId: String,
    name: String,
    message: String,
    time: {
        type: Date,
        default: new Date(Date.now()).toLocaleDateString()
    }
})


const MessageModel = mongoose.model('message', messageSchema);

module.exports = MessageModel;