const Joi = require('joi');
const mongoose = require('mongoose');

const ipAddressSechema = new mongoose.Schema({
    contactId: ObjectId,
    ip: String,
    city: String,
    country: String,
    region: String,
    postal: String,
    latitude: String,
    longitude: String,
    timezone: String,
    currency: String,
    org: String,
    date: {
        type: Date,
        default: Date.now
    }
});


const IpAddress = new mongoose.model('IpAddress', ipAddressSechema);

function validateIpAddress(ipAddress) {
    const schema = {
        contactId: ObjectId,
        ip: Joi.string().max(20).required(),
        city: Joi.string().max(256),
        country: Joi.string().max(256),
        region: Joi.string().max(256),
        postal: Joi.string().max(10),
        latitude: Joi.string().max(20),
        longitude: Joi.string().max(20),
        timezone: Joi.string().max(20),
        currency: Joi.string().max(256),
        org: Joi.string().max(256),
        date: Joi.date()
    }

    return Joi.validate(ipAddress, schema);
}

module.exports.IpAddress = IpAddress;
module.exports.validateIpAddress = validateIpAddress;