const Joi = require('joi');
const mongoose = require('mongoose');

const branchSechema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    profileImgUrl: String,
    summary: String,
    isActive: Boolean,
    displayOrder: Number,
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
    address: ObjectId
});

const Branch = new mongoose.model('Branch', branchSechema);

function validateBranch(branch) {
    const schema = {
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        profileImgUrl: Joi.string().max(256),
        summary: Joi.string().max(256),
        isActive: Joi.boolean(),
        displayOrder: Joi.number().positive(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        address: Joi.string().guid()
    }

    return Joi.validate(branch, schema);
}

module.exports.Branch = Branch;
module.exports.validateBranch = validateBranch;