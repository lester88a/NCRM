const mongoose = require('mongoose');

const postSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    title: {
        type: String,
        minlength: 2,
        maxlength: 256
    },
    content: String,
    viewsCount: Number,
    createdBy: {
        type: String,
        maxlength: 256
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    modifiedBy: {
        type: String,
        maxlength: 256
    },
    modifiedDate: {
        type: Date,
        default: Date.now
    },
    tags: [ObjectId],
    comments: [ObjectId]
});