const Joi = require("joi");

const createUserSchema = Joi.object({
    name:Joi.string()
        .trim()
        .min(5)
        .max(20)
        .required(),
    email:Joi.string()
        .trim()
        .email()
        .required(),
    username:Joi.string()
        .trim()
        .min(3)
        .max(20)
        .required(),
    password:Joi.string()
        .min(6)
        .required()
    
})

const createLoginSchema = Joi.object({
    username:Joi.string()
        .min(3)
        .max(20)
        .required(),
    password:Joi.string()
        .min(6)
        .required()
})

module.exports = {
    createUserSchema,
    createLoginSchema
}