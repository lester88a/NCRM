const Joi = require('joi');
const mongoose = require('mongoose');

const applicationSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        required: true,
        maxlength: 256
    },
    desc: {
        type: String,
        maxlength: 768
    },
    type: {
        type: String,
        maxlength: 256
    },
    status: {
        type: String,
        required: true,
        maxlength: 256
    },
    start: {
        type: Date,
        required: true,
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

const Application = new mongoose.model('Application', applicationSechema);

function validateApplication(application) {
    const schema = {
        contactId: Joi.string().guid().required(),
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        type: Joi.string().max(256),
        status: Joi.string().max(256).required(),
        start: Joi.Date().required().required(),
        end: Joi.Date(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        fee: Joi.string().guid(),
        documents: Joi.array().items(Joi.string().guid())
    }

    return Joi.validate(application, schema);
}

module.exports.Application = Application;
module.exports.validateApplication = validateApplication;