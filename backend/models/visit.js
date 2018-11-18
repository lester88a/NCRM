const mongoose = require('mongoose');

const visitSechema = new mongoose.Schema({
    contactId: ObjectId,
    orgId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    start: {
        type: Date,
        default: Date.now
    },
    end:Date,
    status:String,
    visitorNames: [String],
    visitorCount: Number,
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
    }
});