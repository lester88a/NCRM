const mongoose = require('mongoose');

const documentSechema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    url: String,
    logoUrl: String,
    type: String,
    status: String,
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
    address: ObjectId,
    organization: ObjectId,
    students: [ObjectId],
    instructors: [ObjectId],
    images: [ObjectId]
});