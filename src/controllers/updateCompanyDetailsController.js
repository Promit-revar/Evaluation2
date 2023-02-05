const updateServices = require('../services/updateDetailsServices');
exports.updateCompanyDetails = async (req, res) => {
    const result = await updateServices.updateCompanyDetails(req.body, req.params.id);
    const resposeObject = {"companyId":result.updatedData.companyId,"companyName":result.updatedData.companyName,"ceoName":result.updatedData.ceoName,"score":result.updatedData.score}   
    res.status(200).json({ data: resposeObject ,success:true});
}