const rankingServices= require('../services/rankingServices');
exports.getTopCompanies=async (req,res)=>{
    try{
        const topCompanies = await rankingServices.getTopCompanies(req.query.sector);
        const topRankedCompanies = topCompanies.map((item,i)=>{
            return {"id":item.companyId,"name":item.Companies[0].companyName,"ceo":item.Companies[0].ceoName,"score":item.Companies[0].score,"ranking":i+1}
        })
        res.status(200).json({data:topRankedCompanies});
    }
    catch(error){
        res.status(error.statusCode).json({Error:error.message,success:false});
    }

}