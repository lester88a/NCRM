const Joi = require('joi');
const mongoose = require('mongoose');

const organizationSechema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    url: String,
    logoUrl: String,
    code: {
        type: String,
        maxlength: 50
    },
    website: String,
    type: {
        type: String,
        maxlength: 256
    },
    industry: {
        type: String,
        maxlength: 256
    },
    founded: Date,
    ceo: {
        type: String,
        maxlength: 50
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
    headquarter: ObjectId,
    founders: [string],
    branches: [string]
});


const Organization = new mongoose.model('Organization', organizationSechema);

function validateOrganization(organization) {
    const schema = {
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        logoUrl: Joi.string().max(256).uri(),
        code: Joi.string().max(50),
        website: Joi.string().max(256).uri(),
        type: Joi.string().max(256),
        industry: Joi.string().max(256),
        founded: Joi.date(),
        ceo: Joi.string().max(50),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        headquarter: Joi.string().max(256),
        founders: Joi.array().items(Joi.string()),
        branches: Joi.array().items(Joi.string())
    }

    return Joi.validate(organization, schema);
}

module.exports.Organization = Organization;
module.exports.validateOrganization = validateOrganization;