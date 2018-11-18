const Joi = require('joi');
const mongoose = require('mongoose');

const bankSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    bankName: {
        type: String,
        maxlength: 256
    },
    chequeNum: {
        type: String,
        maxlength: 256
    },
    transitNum: {
        type: String,
        maxlength: 256
    },
    insitituionCode: {
        type: String,
        maxlength: 256
    },
    accountNum: Number,
    amount: Number,
    payTo: {
        type: String,
        maxlength: 256
    },
    memo: {
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
    address: ObjectId
});


const Bank = new mongoose.model('Bank', bankSechema);

function validateBank(bank) {
    const schema = {
        contactId: Joi.string().guid().required(),
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        bankName: Joi.string().max(256).required(),
        chequeNum: Joi.string().max(256).required(),
        transitNum: Joi.string().max(256).required(),
        insitituionCode: Joi.string().max(256).required(),
        accountNum: Joi.number().positive().required(),
        amount: Joi.number().positive().required(),
        payTo: Joi.string().max(256).required(),
        memo:  Joi.string().max(256),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        address: Joi.string().guid()
    }

    return Joi.validate(bank, schema);
}

module.exports.Bank = Bank;
module.exports.validateBank = validateBank;