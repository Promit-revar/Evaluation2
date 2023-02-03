const services= require('../services/csvStorageServices');
exports.getCsvData=async(req,res)=>{
    const result=await services.parseCsvData(req.body);
    const companyDetailsById = await services.getCompanyById(result);
    const companyDetailsBySector = await services.getCompanyBySector(result);
    const scoreDetails= services.calculateScore(companyDetailsById,companyDetailsBySector);
    const insertDataObjects=scoreDetails.map(item=>{return{"companyId":item.companyId,"companyName":item.companyName,"companyScore":item.score,"ceoName":item.ceoName}})
    const insertTags=scoreDetails.map(item=>{return {"tagsInfo":item.tags,"companyId":item.companyId}});
    const insertResult= await services.getInsertIntoDB(insertDataObjects,insertTags);
    res.status(201).send(scoreDetails);
}
