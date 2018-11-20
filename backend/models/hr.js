const Joi = require('joi');
const mongoose = require('mongoose');

const hrSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    sin: String,
    salary: Number,
    jobTitle: {
        type: String,
        maxlength: 256
    },
    jobType: {
        type: String,
        maxlength: 256
    },
    jobDesc: String,
    vacationDays: Number,
    sickDays: Number,
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
    department: ObjectId,
    bankInfo: ObjectId,
    cardInfo: ObjectId,
    absences: [ObjectId]
});

const HumanResource = new mongoose.model('HumanResource', hrSechema);

function validateHumanResource(humanResource) {
    const schema = {
        contactId: ObjectId,
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        sin: Joi.number(),
        salary: Joi.number().positive(),
        jobTitle: Joi.string().max(256),
        jobType: Joi.string().max(256),
        jobDesc: Joi.string().max(768),
        vacationDays: Joi.number().positive(),
        sickDays: Joi.number().positive(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        department: Joi.string().guid(),
        bankInfo: Joi.string().guid(),
        cardInfo: Joi.string().guid(),
        absences: Joi.array().items(Joi.string().guid())

    }

    return Joi.validate(humanResource, schema);
}

module.exports.HumanResource = HumanResource;
module.exports.validateHumanResource = validateHumanResource;