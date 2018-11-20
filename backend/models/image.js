const Joi = require('joi');
const mongoose = require('mongoose');

const imageSechema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    url: {
        type: String,
        maxlength: 256
    },
    extension: {
        type: String,
        maxlength: 10
    },
    size: Number,
    path: {
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

const Image = new mongoose.model('Image', imageSechema);

function validateImage(image) {
    const schema = {
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        url: Joi.string().max(256).uri(),
        extension: Joi.string().max(10),
        size: Joi.number().positive(),
        path: Joi.string().max(256),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256)
    }

    return Joi.validate(image, schema);
}

module.exports.Image = Image;
module.exports.validateImage = validateImage;