const Joi = require('joi');
const mongoose = require('mongoose');

const commentSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    content: String,
    likes: Number,
    disLikes: Number,
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

const Comment = new mongoose.model('Comment', commentSechema);

function validateComment(comment) {
    const schema = {
        contactId: Joi.string().guid().required(),
        name: Joi.string().max(256),
        desc: Joi.string().max(768),
        content: Joi.string().min(2).required(),
        likes: Joi.number().positive(),
        disLikes: Joi.number().positive(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256)
    }

    return Joi.validate(comment, schema);
}

module.exports.Comment = Comment;
module.exports.validateComment = validateComment;