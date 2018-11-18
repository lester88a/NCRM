const Joi = require('joi');
const mongoose = require('mongoose');

const documentSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    url: String,
    type: String,
    fileName: String,
    extension: String,
    path: String,
    size: Number,
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
    fee: ObjectId
});

const Document = new mongoose.model('Document', documentSechema);

function validateDocument(document) {
    const schema = {
        contactId: Joi.string().guid(),
        name: Joi.string().max(256),
        desc: Joi.string().max(768),
        url: Joi.string().uri().max(256),
        type: Joi.string().max(256),
        fileName: Joi.string().max(256).required(),
        extension: Joi.string().max(10).required(),
        path: Joi.string().max(256),
        size: Joi.number(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        fee: Joi.string().guid()
    }

    return Joi.validate(document, schema);
}

module.exports.Document = Document;
module.exports.validateDocument = validateDocument;