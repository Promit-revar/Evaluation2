const axios = require('axios');
const db = require('../models');
const utils = require('../utils/csvParser');
exports.parseCsvData=async(data)=>{
    const result=await utils.parseCsv(data);
    const records=result.data.split('\n');
    records.shift();
    const companyInfo = records.map((item)=>{
       
        const companySectorAndId=item.split(',');
        return {companySector:companySectorAndId[1],companyId:companySectorAndId[0]}  
    })
    
    return companyInfo;
}
exports.getCompanyById=async(data)=>{
    const companyDetails=await Promise.all(data.map(async (company)=>{
       
        const companyInfo=await axios.get(process.env.COMPANY_DETAILS_URL_BY_ID+company.companyId);
        
        return companyInfo.data
        
    }));
    
    return companyDetails;
}
exports.getCompanyBySector=async(data)=>{
    const companyDetails=await Promise.all(data.map(async (company)=>{
       
        const companyInfo=await axios.get(process.env.COMPANY_DETAILS_URL_BY_SECTOR+`name=${company.companySector}`);
        return companyInfo.data
        
    }));
    
    return companyDetails;
}
exports.getInsertIntoDB=async(data,tagsData)=>{
   const insertedCompanies=await db.Companies.bulkCreate(data);
   const insertedTags=await db.Tags.bulkCreate(tagsData);
   return data.map(item=>{
    return {"id":item.companyId,"name":item.companyName,"score":item.companyScore}
   })
   
}
exports.calculateScore=(companyDetails,scoreDetails)=>{
    
    const scoreData=companyDetails.map((item)=>{
        let company;
        let flag=0;
        for(let i=0;i<scoreDetails.length;i++){
            for(let j=0;j<scoreDetails[i].length;j++){
                if(scoreDetails[i][j].companyId===item.id){
                    company=scoreDetails[i][j];
                    flag=1;
                    break;
                }
            }
            if(flag===1){
                break;
            }
        }
        
        
        
        
        const cpi=company.performanceIndex.filter(item=>item.key==="cpi")[0];
        const cf=company.performanceIndex.filter(item=>item.key==="cf")[0];
        const mau=company.performanceIndex.filter(item=>item.key==="mau")[0];
        const roic=company.performanceIndex.filter(item=>item.key==="roic")[0];
        const score=((cpi.value*10)+(cf.value/10000)+(mau.value*10)+roic.value)/4;
        
        return {"companyId":item.id,"companyName":item.name,"score":score,ceoName:item.ceo,tags:item.tags}
    })
    
    return scoreData;
}
