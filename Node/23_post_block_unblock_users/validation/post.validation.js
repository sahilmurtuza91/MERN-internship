const Joi = require("joi");

const createPostSchema = Joi.object({
    caption: Joi.string()
    .min(4)
    .max(500)
    .trim()
    .optional(),
    // image: Joi.array()
    //     .items(
    //         Joi.string()
    //         .required()
    //     )
    //     .required()
    //     .min(1)
})
module.exports = {
    createPostSchema,
}