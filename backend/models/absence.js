const Joi = require('joi');
const mongoose = require('mongoose');

const absenceSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: {
        type: String,
        maxlength: 768
    },
    start: {
        type: Date,
        required: true,
        default: Date.now
    },
    end: {
        type: Date,
        required:true
    },
    status: {
        type: String,
        required: true,
        enum: ['Approved', 'Rejected', 'Pending', 'Revoked', 'Cancelled', 'Unknown']
    },
    dateDeducted: Number,
    createdBy: {
        type: String,
        minlength: 2,
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
    leaveType: ObjectId
});


const Absence = new mongoose.model('Absence', absenceSechema);

function validateAbsence(absence) {
    const schema = {
        contactId: Joi.string().guid().required(),
        name: Joi.string().max(256),
        desc: Joi.string().max(768),
        start: Joi.Date().required(),
        end: Joi.Date().required(),
        status: Joi.string().valid('Approved', 'Rejected', 'Pending', 'Revoked', 'Cancelled', 'Unknown').required(),
        dateDeducted: Joi.number().positive(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        leaveType: Joi.string().guid().required()
    }

    return Joi.validate(absence, schema);
}

module.exports.Absence = Absence;
module.exports.validateAbsence = validateAbsence;