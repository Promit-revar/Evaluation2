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
exports.validateGetTopCompanies=(req,res,next)=>{
    if(!req.query.sector){
        res.status(400).json({error:"sector value missing!", success:false});
    }
    else{
        next();
    }
}