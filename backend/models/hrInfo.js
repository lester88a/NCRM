const mongoose = require('mongoose');

const hrInfoSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    sin: String,
    salary: Number,
    jobTitle: {
        type: String,
        maxlength: 256
    },
    jobType: {
        type: String,
        maxlength: 256
    },
    jobDesc: String,
    vacationDays: Number,
    sickDays: Number,
    salary: Number,
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
    department: ObjectId,
    bankInfo: ObjectId,
    cardInfo: ObjectId,
    absences: [ObjectId]
});