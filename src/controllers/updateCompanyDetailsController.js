const { response } = require('express');
const updateServices = require('../services/updateDetailsServices');
exports.updateCompanyDetails = async (req, res) => {
    try{
        const result = await updateServices.updateCompanyDetails(req.body, req.params.id);
        const resposeObject = {updatedData:{"companyId":result.updatedData.companyId,"companyName":result.updatedData.companyName,"ceoName":result.updatedData.ceoName,"score":result.updatedData.score},count:result.count}   
        res.status(200).json({ data: resposeObject ,success:true});
    }
    catch(error){
        res.status(error.statusCode).json({error:error.message});
    }
}