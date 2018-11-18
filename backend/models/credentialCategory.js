const Joi = require('joi');
const mongoose = require('mongoose');

const credentialCategorySechema = new mongoose.Schema({
    contactId: ObjectId,
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

const CredentialCategory = new mongoose.model('CredentialCategory', credentialCategorySechema);

function validateCredentialCategory(credentialCategory) {
    const schema = {
        contactId: Joi.string().guid().required(),
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256)
    }

    return Joi.validate(credentialCategory, schema);
}

module.exports.CredentialCategory = CredentialCategory;
module.exports.validateCredentialCategory = validateCredentialCategory;