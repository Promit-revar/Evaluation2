const db = require('../models');
const HttpError = require('../../Error/httpError');
exports.getTopCompanies = async (sector) => {
    try{
        const result = await db.Sector.findAll({
            where: { sector: sector },
            include: db.Companies,
            
        });
        if(result.length === 0){
            throw new HttpError("No Companies found for the given sector",404);
        }
        return result.sort((element1,element2)=>{
            if(element1.Companies[0].companyScore>element2.Companies[0].companyScore){
                return -1;
            }
        });
    }
    catch(err){
        if(err.statusCode=== 404){
            throw err;
        }
        else{
            throw new HttpError("Database Error",500);
        }
    }
    
    
    
}