const mongoose = require('mongoose');

const socialInfoSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    twitter: {
        type: String,
        maxlength: 256
    },
    facebook: {
        type: String,
        maxlength: 256
    },
    github: {
        type: String,
        maxlength: 256
    },
    telegram: {
        type: String,
        maxlength: 256
    },
    whatsapp: {
        type: String,
        maxlength: 256
    },
    youtube: {
        type: String,
        maxlength: 256
    },
    snapchat: {
        type: String,
        maxlength: 256
    },
    linkedin: {
        type: String,
        maxlength: 256
    },
    skype: {
        type: String,
        maxlength: 256
    },
    wechat: {
        type: String,
        maxlength: 256
    },
    qq: {
        type: String,
        maxlength: 256
    },
    weibo: {
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
    }
});