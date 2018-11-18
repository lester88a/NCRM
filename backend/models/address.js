const Joi = require('joi');
const mongoose = require('mongoose');

const addressSechema = new mongoose.Schema({
    unit: {
        type: String,
        maxlength: 20
    },
    line1: {
        type: String,
        required: true,
        trim: true,
        maxlength: 256
    },
    lien2: {
        type: String,
        trim: true,
        maxlength: 256
    },
    city: {
        type: String,
        maxlength: 256
    },
    province: {
        type: String,
        maxlength: 256
    },
    country: {
        type: String,
        maxlength: 256
    },
    zipcode: {
        type: String,
        minlength: 4,
        maxlength: 10,
        uppercase: true,
        trim: true
    },
    pobox: String,
    isPrimary: {
        type: Boolean,
        default: false
    },
    fullAddress: {
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
    }
});

const Address = new mongoose.model('Address', addressSechema);

function validateAddress(address) {
    const schema = {
        unit: Joi.string().max(20),
        line1: Joi.string().max(256).required(),
        lien2: Joi.string().max(256),
        city: Joi.string().max(50),
        province: Joi.string().max(50),
        country: Joi.string().max(50).required(),
        zipcode: Joi.string().min(4).max(10).required(),
        pobox: Joi.string(),
        isPrimary: Joi.boolean().required(),
        fullAddress: Joi.string().max(256),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256)
    }

    return Joi.validate(address, schema);
}

module.exports.Address = Address;
module.exports.validateAddress = validateAddress;