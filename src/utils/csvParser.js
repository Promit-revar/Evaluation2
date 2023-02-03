const { default: axios } = require("axios")

exports.parseCsv=async(data)=>{
    const records= await axios.get(data.urlLink);
    return records;
}