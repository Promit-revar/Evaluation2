const db = require('../models');
exports.getTopCompanies = async (sector) => {
    const result = await db.Sector.findAll({
        where: { sector: sector },
        include: db.Companies,
        order:[
            ["companyScore","Desc"]
        ]
    });
    return result;
}