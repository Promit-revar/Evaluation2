const Joi = require("joi");
const schema= Joi.object({
    urlLink:Joi.string()
    .required()

})
exports.validatePost=(req,res,next)=>{
    const {error,value}= schema.validate(req.body);
    if(error){
        res.status(400).json({error:error});
    }
    else{
        next();
    }
}