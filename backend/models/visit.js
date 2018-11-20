const Joi = require('joi');
const mongoose = require('mongoose');

const visitSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    start: {
        type: Date,
        default: Date.now
    },
    end:Date,
    status: String,
    visitorNames: String,
    visitorCount: Number,
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

const Visit = new mongoose.model('Visit', visitSechema);

function validateVisit(visit) {
    const schema = {
        contactId: ObjectId,
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        start: Joi.date(),
        end: Joi.date(),
        status: Joi.string().max(256),
        visitorNames: Joi.string().max(256),
        viewsCount: Joi.number(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256)
    }

    return Joi.validate(visit, schema);
}

module.exports.Visit = Visit;
module.exports.validateVisit = validateVisit;