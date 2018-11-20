const Joi = require('joi');
const mongoose = require('mongoose');

const tagSechema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
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


const Tag = new mongoose.model('Tag', tagSechema);

function validateTag(tag) {
    const schema = {
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256)

    }

    return Joi.validate(tag, schema);
}

module.exports.Tag = Tag;
module.exports.validateTag = validateTag;