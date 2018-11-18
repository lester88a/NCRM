const mongoose = require('mongoose');

const userLogSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    date: {
        type: Date,
        default: Date.now
    },
    ipAddress: ObjectId
});