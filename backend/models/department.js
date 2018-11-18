const Joi = require('joi');
const mongoose = require('mongoose');

const departmentSechema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    managerName: String,
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
    manager: ObjectId
});

const Department = new mongoose.model('Department', departmentSechema);

function validateDepartment(department) {
    const schema = {
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        managerName: Joi.string().max(256),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        manager: Joi.string().guid()
    }

    return Joi.validate(department, schema);
}

module.exports.Department = Department;
module.exports.validateDepartment = validateDepartment;