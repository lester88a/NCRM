const Joi = require('joi');
const mongoose = require('mongoose');

const leaveTypeSechema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
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

const LeaveType = new mongoose.model('LeaveType', leaveTypeSechema);

function validateLeaveType(leaveType) {
    const schema = {
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        isUseVacationDays: Joi.boolean(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256)
    }

    return Joi.validate(leaveType, schema);
}

module.exports.LeaveType = LeaveType;
module.exports.validateLeaveType = validateLeaveType;