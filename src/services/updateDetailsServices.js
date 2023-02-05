const db = require('../models');
exports.updateCompanyDetails = async (data,id) => {
    
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