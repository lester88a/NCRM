const Joi = require('joi');
const mongoose = require('mongoose');

const registrationSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    registrationNumber: String,
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

const Registration = new mongoose.model('Registration', registrationSechema);

function validateRegistration(registration) {
    const schema = {
        contactId: ObjectId,
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        registrationNumber: Joi.string().max(20),
        type: Joi.string().max(256),
        status: Joi.string().max(256),
        start: Joi.date(),
        end: Joi.date(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        fee: Joi.string().guid(),
        documents: Joi.array().items(Joi.string().guid())

    }

    return Joi.validate(registration, schema);
}

module.exports.Registration = Registration;
module.exports.validateRegistration = validateRegistration;