const Joi = require('joi');
const mongoose = require('mongoose');

const institutionSechema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    url: String,
    logoUrl: String,
    type: String,
    status: String,
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
    organization: ObjectId,
    students: [ObjectId],
    instructors: [ObjectId],
    images: [ObjectId]
});

const Institution = new mongoose.model('Institution', institutionSechema);

function validateInstitution(institution) {
    const schema = {
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        url: Joi.string().max(256).uri(),
        logoUrl: Joi.string().max(256).uri(),
        type: Joi.string().max(256),
        status: Joi.string().max(256),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        address: Joi.string().guid(),
        organization: Joi.string().guid(),
        students: Joi.array().items(Joi.string().guid()),
        instructors: Joi.array().items(Joi.string().guid()),
        images: Joi.array().items(Joi.string().guid())
    }

    return Joi.validate(institution, schema);
}

module.exports.Institution = Institution;
module.exports.validateInstitution = validateInstitution;