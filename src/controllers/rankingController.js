const rankingServices= require('../services/rankingServices');
exports.getTopCompanies=async (req,res)=>{
    console.log(req.query.sector);
    const topCompanies=await rankingServices.getTopCompanies(req.query.sector);
    res.send(topCompanies);
}