const router = require('express').Router();
//middlewares
const { validatePostApiSave, validateGetTopCompanies, validateUpdateCompanyDetails } = require("../middlewares/validation");
//controllers
const updateController = require('../controllers/updateCompanyDetailsController');
const contollers = require('../controllers/csvDataStorageController');
const rankingController = require('../controllers/rankingController');
//routes
router.post('/api/save', validatePostApiSave, contollers.getCsvData);
router.get('/api/companies', validateGetTopCompanies, rankingController.getTopCompanies);
router.patch('/api/update/:id', validateUpdateCompanyDetails, updateController.updateCompanyDetails);
module.exports = router