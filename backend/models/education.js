const Joi = require('joi');
const mongoose = require('mongoose');

const educationSechema = new mongoose.Schema({
    name: String,
    start: Date,
    end: Date,
    level: String,
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
    insitution: ObjectId
});

const Education = new mongoose.model('Education', educationSechema);

function validateEducation(education) {
    const schema = {
        name: Joi.string().max(256).required(),
        start: Joi.date().required(),
        end: Joi.date(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        address: Joi.string().guid(),
        insitution: Joi.string().guid()
    }

    return Joi.validate(education, schema);
}

module.exports.Education = Education;
module.exports.validateEducation = validateEducation;