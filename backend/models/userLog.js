const Joi = require('joi');
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


const UserLog = new mongoose.model('UserLog', userLogSechema);

function validateUserLog(UserLog) {
    const schema = {
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        date: Joi.date(),
        ipAddress: Joi.string().guid()
    }

    return Joi.validate(UserLog, schema);
}

module.exports.UserLog = UserLog;
module.exports.validateUserLog = validateUserLog;