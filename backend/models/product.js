const Joi = require('joi');
const mongoose = require('mongoose');

const productSechema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 256
    },
    desc: String,
    type: String,
    status: String,
    isEnabled: {
        type: Boolean,
        default: false
    },
    made: {
        type: String,
        maxlength: 256
    },
    serialNumber: {
        type: String,
        maxlength: 256
    },
    stock: Number,
    viewsCount: Number,
    url: {
        type: String,
        maxlength: 256
    },
    loguUrl: {
        type: String,
        maxlength: 256
    },
    latitude: {
        type: String,
        maxlength: 256
    },
    longitude: {
        type: String,
        maxlength: 256
    },
    version: {
        type: String,
        maxlength: 256
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
    },
    address: ObjectId,
    vender: ObjectId,
    fee: ObjectId,
    images: [ObjectId],
    tags: [ObjectId],
    documents: [ObjectId],
});


const Product = new mongoose.model('Product', productSechema);

function validateProduct(product) {
    const schema = {
        contactId: ObjectId,
        name: Joi.string().max(256).required(),
        desc: Joi.string().max(768),
        type: Joi.string().max(256),
        status: Joi.string().max(256),
        isEnabled: Joi.boolean(),
        made: Joi.string().max(256),
        serialNumber: Joi.string().max(256),
        stock: Joi.number().required(),
        viewsCount: Joi.number(),
        url: Joi.string().max(256).uri(),
        loguUrl: Joi.string().max(256).uri(),
        latitude: Joi.string().max(256),
        longitude: Joi.string().max(256),
        version: Joi.string().max(256),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        address: Joi.string().guid(),
        fee: Joi.string().guid(),
        vender: Joi.string().guid(),
        images: Joi.array().items(Joi.string().guid()),
        tags: Joi.array().items(Joi.string().guid()),
        documents: Joi.array().items(Joi.string().guid())

    }

    return Joi.validate(product, schema);
}

module.exports.Product = Product;
module.exports.validateProduct = validateProduct;