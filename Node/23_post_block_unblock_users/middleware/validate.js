const ApiError = require("../utils/apiError")

const validate = (schema) =>(req, res, next)=>{
    const {error} = schema.validate(req.body,{
        abortEarly: false,
        allowUnknown: false,
        stripUnknown: true,
    });

    if(error){
        const messages = error.details.map((err)=> err.message);
        throw new ApiError(
            400,
            messages.join(", ")
        );
    }
    next();
};

module.exports = validate;