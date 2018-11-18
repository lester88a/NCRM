const mongoose = require('mongoose');

const registrationSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    type: String,
    status: String,
    start: {
        type: Date,
        default: Date.now
    },
    end: Date,
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
    fee: ObjectId,
    documents: [ObjectId],
});