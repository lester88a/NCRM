const Joi = require('joi');
const mongoose = require('mongoose');

const feeSechema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    price: {
        type: Number,
        required: true,
        get: v => Math.round(v*100)/100,
        set: v => Math.round(v*100)/100
    },
    tax: {
        type: Number,
        get: v => Math.round(v*100)/100,
        set: v => Math.round(v*100)/100
    },
    total: {
        type: Number,
        get: v => Math.round(v*100)/100,
        set: v => Math.round(v*100)/100
    },
    currency: String,
    hasDiscount: Boolean,
    discountAmount: {
        type: Number,
        get: v => Math.round(v*100)/100,
        set: v => Math.round(v*100)/100
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

const Fee = new mongoose.model('Fee', feeSechema);

function validateFee(fee) {
    const schema = {
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        price: Joi.number().required(),
        tax: Joi.number(),
        currency: Joi.string().max(256),
        hasDiscount: Joi.boolean(),
        discountAmount: Joi.number(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256)
    }

    return Joi.validate(fee, schema);
}

module.exports.Fee = Fee;
module.exports.validateEducation = validateFee;