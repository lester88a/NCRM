const Joi = require('joi');
const mongoose = require('mongoose');

const holidaySechema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    date: Date,
    isUseVacationDays: {
        type: Boolean,
        default: false
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

const Holiday = new mongoose.model('Holiday', holidaySechema);

function validateHoliday(holiday) {
    const schema = {
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        date: Joi.date().required(),
        isUseVacationDays: Joi.boolean(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256)
    }

    return Joi.validate(holiday, schema);
}

module.exports.Holiday = Holiday;
module.exports.validateHoliday = validateHoliday;