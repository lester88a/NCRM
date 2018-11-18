const Joi = require('joi');
const mongoose = require('mongoose');

const cardSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    cardNum: Number,
    cardType: String,
    cardName: {
        type: String,
        maxlength: 256
    },
    validMonth: Number,
    validYear: Number,
    securityCode: Number,
    cardHolder: {
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

const Card = new mongoose.model('Card', cardSechema);

function validateCard(card) {
    const schema = {
        contactId: Joi.string().guid(),
        name: Joi.string().max(256),
        desc: Joi.string().max(768),
        cardNum: Joi.number().positive().required(),
        cardType: Joi.string().max(256),
        cardName: Joi.string().max(256).required(),
        validMonth: Joi.string().max(2).required(),
        validYear: Joi.number().positive().required(),
        securityCode: Joi.string().max(3).required(),
        cardHolder: Joi.string().max(256).required(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        address: Joi.string().guid()
    }

    return Joi.validate(card, schema);
}

module.exports.Card = Card;
module.exports.validateCard = validateCard;