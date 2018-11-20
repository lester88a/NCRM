const Joi = require('joi');
const mongoose = require('mongoose');

const socialSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    twitter: {
        type: String,
        maxlength: 256
    },
    facebook: {
        type: String,
        maxlength: 256
    },
    github: {
        type: String,
        maxlength: 256
    },
    telegram: {
        type: String,
        maxlength: 256
    },
    instagram: {
        type: String,
        maxlength: 256
    },
    whatsapp: {
        type: String,
        maxlength: 256
    },
    youtube: {
        type: String,
        maxlength: 256
    },
    snapchat: {
        type: String,
        maxlength: 256
    },
    linkedin: {
        type: String,
        maxlength: 256
    },
    skype: {
        type: String,
        maxlength: 256
    },
    wechat: {
        type: String,
        maxlength: 256
    },
    qq: {
        type: String,
        maxlength: 256
    },
    weibo: {
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


const Social = new mongoose.model('Social', socialSechema);

function validateSocial(social) {
    const schema = {
        contactId: ObjectId,
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        twitter: Joi.string().max(256),
        facebook: Joi.string().max(256),
        github: Joi.string().max(256),
        telegram: Joi.string().max(256),
        instagram: Joi.string().max(256),
        whatsapp: Joi.string().max(256),
        youtube: Joi.string().max(256),
        snapchat: Joi.string().max(256),
        linkedin: Joi.string().max(256),
        skype: Joi.string().max(256),
        wechat: Joi.string().max(256),
        qq: Joi.string().max(256),
        weibo: Joi.string().max(256),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256)
    }

    return Joi.validate(social, schema);
}

module.exports.Social = Social;
module.exports.validateSocial = validateSocial;