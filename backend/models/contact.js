const Joi = require('joi');
const mongoose = require('mongoose');

const contactSechema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 256
    },
    desc: {
        type: String,
        maxlength: 768
    },
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 256
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 256
    },
    middleName: {
        type: String,
        maxlength: 256
    },
    nickName: {
        type: String,
        maxlength: 256
    },
    gender: {
        type: String,
        enum: ['M', 'F', 'X']
    },
    birthDate: Date,
    profileImgUrl: String,
    isEnabled: {
        type: Boolean,
        default: true
    },
    cellPhone: {
        type: String,
        minlength: 6,
        maxlength: 20
    },
    mobile: {
        type: String,
        minlength: 6,
        maxlength: 20
    },
    fax: {
        type: String,
        minlength: 6,
        maxlength: 20
    },
    userName: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 256,
        lowercase: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 256,
        lowercase: true
    },
    emailConfirmed: {
        type: Boolean,
        default: false
    },
    twoFactor: {
        type: Boolean,
        default: false
    },
    loginCount: Number,
    failedCount: Number,
    viewsCount: Number,
    isAdvanced: {
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
    },
    homeAddress: ObjectId,
    mailingAddress: ObjectId,
    organization: ObjectId,
    socialInfo: ObjectId,
    hrInfo: ObjectId,
    contactType: ObjectId,
    apps: [ObjectId],
    roles: [ObjectId],
    businessAddress: [ObjectId],
    educations: [ObjectId],
    registrations: [ObjectId],
    applications: [ObjectId],
    examinations: [ObjectId],
    documents: [ObjectId],
    userLogs: [ObjectId],
    visits: [ObjectId]
});

const Contact = new mongoose.model('Contact', contactSechema);

function validateContact(contact) {
    const schema = {
        name: Joi.string().max(256),
        desc: Joi.string().max(768),
        firstName: Joi.string().max(256).required(),
        lastName: Joi.string().max(256).required(),
        middleName: Joi.string().max(256),
        nickName: Joi.string().max(256),
        gender: Joi.string().valid('M','F','X').required(),
        birthDate: Joi.date(),
        profileImgUrl: Joi.string().uri(),
        isEnabled: Joi.boolean(),
        tel: Joi.string().min(6).max(20),
        mobile: Joi.string().min(6).max(20),
        fax: Joi.string().min(6).max(20),
        userName: Joi.string().alphanum().min(3).max(50).required(),
        password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])[a-zA-Z0-9]{6,20}$/).required(),
        email: Joi.string().email({ minDomainAtoms: 2 }).max(256).required(),
        emailConfirmed: Joi.boolean(),
        twoFactor: Joi.boolean(),
        loginCount: Joi.number().positive(),
        failedCount: Joi.number().positive(),
        viewsCount: Joi.number().positive(),
        isAdvanced: Joi.boolean(),
        createdBy: Joi.string().max(256),
        modifiedBy: Joi.string().max(256),
        homeAddress: Joi.string().guid(),
        mailingAddress: Joi.string().guid(),
        organization: Joi.string().guid(),
        socialInfo: Joi.string().guid(),
        hrInfo: Joi.string().guid(),
        contactType: Joi.string().guid(),
        businessAddress: Joi.array().items(Joi.string().guid()),
        apps: Joi.array().items(Joi.string().guid()),
        roles: Joi.array().items(Joi.string().guid()),
        educations: Joi.array().items(Joi.string().guid()),
        registrations: Joi.array().items(Joi.string().guid()),
        applications: Joi.array().items(Joi.string().guid()),
        examinations: Joi.array().items(Joi.string().guid()),
        documents: Joi.array().items(Joi.string().guid()),
        userLogs: Joi.array().items(Joi.string().guid()),
        visits: Joi.array().items(Joi.string().guid())
    }

    return Joi.validate(contact, schema);
}

module.exports.Contact = Contact;
module.exports.validateContact = validateContact;

// password regular expression
// /^
//   (?=.*\d)          // should contain at least one digit
//   (?=.*[a-z])       // should contain at least one lower case
//   (?=.*[A-Z])       // should contain at least one upper case
//   [a-zA-Z0-9]{6,20}   // should contain at least 6 and max 20 from the mentioned characters
// $/