const Joi = require('joi');
const mongoose = require('mongoose');

const postSechema = new mongoose.Schema({
    contactId: ObjectId,
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    title: {
        type: String,
        minlength: 2,
        maxlength: 256
    },
    content: String,
    viewsCount: Number,
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
    tags: [ObjectId],
    comments: [ObjectId]
});

const Post = new mongoose.model('Post', postSechema);

function validatePost(post) {
    const schema = {
        contactId: ObjectId,
        name: Joi.string().max(256),
        desc: Joi.string().max(768),
        title: Joi.string().min(2).max(256).required(),
        content: Joi.string(),
        viewsCount: Joi.number(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        tags: Joi.array().items(Joi.string().guid()),
        comments: Joi.array().items(Joi.string().guid())

    }

    return Joi.validate(post, schema);
}

module.exports.Post = Post;
module.exports.validatePost = validatePost;