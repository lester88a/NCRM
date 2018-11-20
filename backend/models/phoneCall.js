const Joi = require('joi');
const mongoose = require('mongoose');

const phoneCallSechema = new mongoose.Schema({
    contactId: ObjectId,
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

const PhoneCall = new mongoose.model('PhoneCall', phoneCallSechema);

function validatePhoneCall(phoneCall) {
    const schema = {
        contactId: ObjectId,
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        start: Joi.date().required(),
        end: Joi.date(),
        status: Joi.string().max(256),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256)
    }

    return Joi.validate(phoneCall, schema);
}

module.exports.PhoneCall = PhoneCall;
module.exports.validatePhoneCall = validatePhoneCall;