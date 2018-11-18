const Joi = require('joi');
const mongoose = require('mongoose');

const credentialSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    email:  {
        type: String,
        maxlength: 256
    },
    username:  {
        type: String,
        maxlength: 256
    },
    password:  {
        type: String,
        maxlength: 256
    },
    url:  {
        type: String,
        maxlength: 256
    },
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
    category: ObjectId
});

const Credential = new mongoose.model('Credential', credentialSechema);

function validateCredential(credential) {
    const schema = {
        contactId: Joi.string().guid().required(),
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        email: Joi.string().max(256),
        username: Joi.string().max(256),
        password: Joi.string().max(256),
        url: Joi.string().max(256),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        category: Joi.string().guid()
    }

    return Joi.validate(credential, schema);
}

module.exports.Credential = Credential;
module.exports.validateCredential = validateCredential;