const mongoose = require('mongoose');

const roleSechema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    logoUrl: String,
    code: {
        type: String,
        maxlength: 50
    },
    website: String,
    type: {
        type: String,
        maxlength: 256
    },
    industry: {
        type: String,
        maxlength: 256
    },
    founded: Date,
    ceo: ObjectId,
    headquarter: ObjectId,
    founders: [ObjectId],
    branches: [ObjectId],
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