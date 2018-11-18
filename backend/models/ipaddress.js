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