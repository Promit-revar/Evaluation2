const db = require('../models');
exports.getTopCompanies = async (sector) => {
    const result = await db.Sector.findAll({
        where: { sector: sector },
        include: db.Companies,
        
    });
    return result.sort((element1,element2)=>{
        if(element1.Companies[0].companyScore>element2.Companies[0].companyScore){
            return -1;
        }
    });
    
    
}