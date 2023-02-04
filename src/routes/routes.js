const router = require('express').Router();
const { validatePost, validateGetTopCompanies } = require("../middlewares/validation")
const contollers = require('../controllers/csvDataStorageController');
const rankingController = require('../controllers/rankingController');
router.post('/api/save', validatePost, contollers.getCsvData);
router.get('/api/companies', validateGetTopCompanies, rankingController.getTopCompanies);

module.exports = router