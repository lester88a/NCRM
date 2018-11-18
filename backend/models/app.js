const Joi = require('joi');
const mongoose = require('mongoose');

const appSechema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 256
    },
    desc: {
        type: String,
        maxlength: 768
    },
    iconId: {
        type: String,
        maxlength: 20
    },
    url: {
        type: String,
        maxlength: 256
    },
    logoUrl: {
        type: String,
        maxlength: 256
    },
    type: {
        type: String,
        maxlength: 256
    },
    visible: {
        type: Boolean,
        default: true
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

const App = new mongoose.model('App', appSechema);

function validateApp(app) {
    const schema = {
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        iconId: Joi.string().max(20),
        url: Joi.string().uri(),
        logoUrl: Joi.string().uri(),
        type: Joi.string().max(256),
        visible: Joi.boolean(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256)
    }

    return Joi.validate(app, schema);
}

module.exports.App = App;
module.exports.validateApp = validateApp;