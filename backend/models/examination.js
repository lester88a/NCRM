const Joi = require('joi');
const mongoose = require('mongoose');

const examinatinSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    type: String,
    status: String,
    start: {
        type: Date,
        default: Date.now
    },
    end: Date,
    score: Number,
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
    fee: ObjectId
});

const Examination = new mongoose.model('Examination', examinatinSechema);

function validateExamination(examinatin) {
    const schema = {
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        type:  Joi.string().max(256),
        status:  Joi.string().max(256),
        start: Joi.date().required(),
        end: Joi.date(),
        score:  Joi.number(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        fee: Joi.string().guid()
    }

    return Joi.validate(examinatin, schema);
}

module.exports.Examination = Examination;
module.exports.validateExamination = validateExamination;