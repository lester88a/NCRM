const Joi = require('joi');
const mongoose = require('mongoose');

const appointmentSechema = new mongoose.Schema({
    contactId: ObjectId,
    orgId: ObjectId,
    name: {
        type: String,
        required: true,
        maxlength: 256
    },
    desc: {
        type: String,
        maxlength: 768
    },
    type: {
        type: String,
        maxlength: 256
    },
    status: {
        type: String,
        maxlength: 256
    },
    start: {
        type: Date,
        required: true,
        default: Date.now
    },
    end: Date,
    priority: {
        type: String,
        required: true,
        enum: ['Low', 'Routine', 'High', 'Urgent', 'Extreme']
    },
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
    }
});

const Appointment = new mongoose.model('Appointment', appointmentSechema);

function validateAppointment(appointment) {
    const schema = {
        contactId: Joi.string().guid(),
        orgId: Joi.string().guid(),
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        type: Joi.string().max(256),
        status: Joi.string().max(256),
        start: Joi.Date().required(),
        end: Joi.Date(),
        priority: Joi.valid('Low', 'Routine', 'High', 'Urgent', 'Extreme').required(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256)
    }

    return Joi.validate(appointment, schema);
}

module.exports.Appointment = Appointment;
module.exports.validateAppointment = validateAppointment;