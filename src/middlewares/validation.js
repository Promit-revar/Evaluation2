const Joi = require("joi");
const postApiDataSchema= Joi.object({
    urlLink:Joi.string().uri().required()

})
const updateValidationSchema=Joi.object({
    companyName:Joi.string().required(),
    ceoName:Joi.string().required()
});
const checkUUIDSchema = Joi.object({
    id:Joi.string().guid({
        version: [
            'uuidv4',
            'uuidv5'
        ]
    })
})
exports.validatePostApiSave=(req,res,next)=>{
    const {error,value}= postApiDataSchema.validate(req.body);
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
exports.validateUpdateCompanyDetails=(req,res,next)=>{
    const {error,value}= updateValidationSchema.validate(req.body) && checkUUIDSchema.validate(req.params);
    if(error){
        res.status(400).json({error:error});
    }
    else{
        next();
    }
}