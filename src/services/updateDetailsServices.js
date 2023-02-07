const db = require('../models');
const httpError = require('../../Error/httpError');
exports.updateCompanyDetails = async (data,id) => {
    try{
    const result = await db.Companies.update(
        {
            companyName: data.companyName,
            ceoName: data.ceoName,
        }, {
        where: { companyId: id },
    });
    const updatedData = await db.Companies.findOne({
        where: { companyId: id },
    });
    return {"updatedData":updatedData,"count":result};
}
catch(error){
    throw new httpError("Database Error",500);
}
}