const mongoose = require('mongoose');

const productSechema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    type: String,
    status: String,
    isEnabled: {
        type: Boolean,
        default: false
    },
    made: {
        type: String,
        maxlength: 256
    },
    serialNumber: {
        type: String,
        maxlength: 256
    },
    stock: Number,
    viewsCount: Number,
    url: {
        type: String,
        maxlength: 256
    },
    loguUrl: {
        type: String,
        maxlength: 256
    },
    latitude: {
        type: String,
        maxlength: 256
    },
    longitude: {
        type: String,
        maxlength: 256
    },
    version: {
        type: String,
        maxlength: 256
    },
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
    vender: ObjectId,
    fee: ObjectId,
    images: [ObjectId],
    tags: [ObjectId],
    documents: [ObjectId],
});