const Joi = require('joi');
const mongoose = require('mongoose');

const contactTypeSechema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
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

const ContactType = new mongoose.model('ContactType', contactTypeSechema);

function validateContactType(contactType) {
    const schema = {
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256)
    }

    return Joi.validate(contactType, schema);
}

module.exports.ContactType = ContactType;
module.exports.validateContactType = validateContactType;

//Student, Teacher, Customer, Vender, Partner, Service Provider, 